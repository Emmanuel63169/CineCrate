// This is where the Routes will go
const express = require('express');
const cors = require('cors');
const pg = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

const {
    pool,
    createUser,
    createMovie,
    authenticateUser,
    getUserById,
    getMovies,
    getMoviesWithGenres,
} = require('./db')

function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(403).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }

        req.user = decoded;
        next();
    });
}

// GET/api/movies
router.get('/movies', async(req, res, next) => {
    try{
        const response = await getMoviesWithGenres();
        if(response.length === 0) {
            return res.status(400).json({message: 'No Movies?'})
        }
        res.status(200).send(response)
    } catch (error) {
        next(error)
    }
})

// Get/api/movies/:id
router.get('/movies/:id', async(req, res, next) => {
    try{
        const { id } = req.params;
        const result = await pool.query(
            `SELECT m.*, array_agg(g.genre_name) AS genres
            FROM movies m
            LEFT JOIN movie_genres mg ON m.movie_id = mg.movie_id
            LEFT JOIN genres g ON mg.genre_id = g.genre_id
            WHERE m.movie_id = $1
            GROUP BY m.movie_id`,
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Movie not Found" });
        }

        res.status(200).json(result.rows[0])
    } catch (error) {
        next(error)
    }
})

//  POST /api/users/register
router.post('/users/register', async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await pool.query(
            `INSERT INTO users (username, email, password_hash)
            VALUES ($1, $2, $3)
            RETURNING user_id, username, email;`,
            [username, email, hashedPassword]
        );

        const user = result.rows[0];
        res.status(201).json(user);
    } catch (error) {
        next(error)
    }
});

router.post('/users/login', async (req, res, next) => {
    const {email, password } = req.body;

    try {
        const result = await pool.query(
            'SELECT * FROM users WHERE email = $1;',
            [email]
        );

        if (result.rows.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const user = result.rows[0];
        const isValid = await bcrypt.compare(password, user.password_hash);

        if (!isValid) {
            return res.status(401).json({ message: 'Invalid Credentials' });
        }

        // JWT creation
        const token = jwt.sign(
            {user_id: user.user_id, username: user.username, is_admin: user.is_admin },
            process.env.JWT_SECRET,
            { expiresIn: '2h' }
        );

        res.status(200).json({ token });
    } catch (error) {
        next(error);
    }
});

// GET /api/users/me
router.get('/users/me', verifyToken, async (req, res, next) => {
    try {
        const { user_id } = req.user;

        const result = await pool.query(
            `SELECT user_id, username, email, is_admin
             FROM users
             WHERE user_id = $1;`,
             [user_id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        next(error);
    }
});


module.exports = router;