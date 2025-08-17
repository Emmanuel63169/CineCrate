// This is where the Routes will go
const express = require('express');
const cors = require('cors');
const pg = require('pg');
const jwt = require('jsonwebtoken');
const router = express.Router()

const {
    pool,
    createUser,
    createMovie,
    authenticateUser,
    getUserById,
    getMovies,
    getMoviesWithGenres,
} = require('./db')

// function verifyToken(req, res, next) {

// }

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

module.exports = router;