// This is where the TABLES for the database are made and connected
require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: false,
});

const uuid = require("uuid");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT || "lmao"; // cover in .env later

const connectDB = async () => {
    try {
        console.log('Connecting')
        await pool.connect();
        console.log('Connected')
    } catch (error) {
        console.error('Database Connection Error:', error);
        process.exit(1);
    }
}

// Tables for storing are made here
const createTables = async () => {
    try {
        console.log('Creating Tables...')
        
        //drop tables if exist (only on my db)
        const dropTables = `
        DROP TABLE IF EXISTS movie_genres CASCADE;
        DROP TABLE IF EXISTS genres CASCADE;
        DROP TABLE IF EXISTS movies CASCADE;
        DROP TABLE IF EXISTS users CASCADE;
        `;
        await pool.query(dropTables);
        
        
        // Creates User table- Register
        console.log('Creating users table...')
        const createUsersTable = /*sql*/ `
        CREATE TABLE IF NOT EXISTS users (
            user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            is_admin BOOLEAN DEFAULT FALSE,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
        );
        `;
        await pool.query(createUsersTable)
        
        
        // Creates movies table - add movie categories here or in the genre/movie_genre tables?
        console.log('Creating movies table...')
        const createMoviesTable = /*sql*/ `
        CREATE TABLE IF NOT EXISTS movies (
            movie_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            movie_name VARCHAR(100) NOT NULL,
            movie_img TEXT DEFAULT NULL,
            movie_description TEXT,
            price NUMERIC(10, 2) NOT NULL,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
        );
        `;
        await pool.query(createMoviesTable)
        
        
        // Create Genres table -
        console.log('Creating categories Table...')
        const createGenresTable = /*sql*/ `
        CREATE TABLE IF NOT EXISTS genres (
            genre_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            genre_name VARCHAR(50) UNIQUE NOT NULL
        );
        `;
        await pool.query(createGenresTable);

        // Create Movie_Genres Join Table -
        console.log('Creating movie_genres join table...')
        const createMovieGenresTable = /*sql*/ `
        CREATE TABLE IF NOT EXISTS movie_genres (
            movie_id UUID REFERENCES movies(movie_id) ON DELETE CASCADE,
            genre_id UUID REFERENCES genres(genre_id) ON DELETE CASCADE,
            PRIMARY KEY (movie_id, genre_id)
        );
        `;
        await pool.query(createMovieGenresTable);

        // Create Cart_movies Table

        // Create Carts Table


    } catch (error) {
        console.error('Error Creating Tables', error)
    }
    
}

// Create Functions to sort into tables is made here

//Create User - Register
const createUser = async ({username, email, password_hash, is_admin = false}) => {
    const hashedPassword = await bcrypt.hash(password_hash, 10);
    
    const SQL = /*SQL*/ `
    INSERT INTO users (
        user_id, 
        username, 
        email, 
        password_hash, 
        is_admin
    )
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `;
    const response = await pool.query(SQL, [
        uuid.v4(), 
        username,
        email,
        hashedPassword,
        is_admin
    ]);
    return response.rows[0];
}

// Authentication
const authenticateUser = async ({ username, password }) => {
    console.log('Authenticating User: ', username);
    const SQL = /*sql*/ `
        SELECT user_id, username, password_hash
        FROM users
        WHERE username = $1;
    `;
    const response = await pool.query(SQL, [username]);

    if (!response.rows.length) {
        console.error('Invalid username or password');
        const error = Error('Invalid username or password');
        error.status = 401;
        throw error;
    }

    const user = response.rows[0];

    console.log('Password entered: ', password);
    console.log('Stored hash: ', user.password_hash);

    // Compared provided password with the stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password_hash)

    if (!isPasswordValid) {
        console.error('Invalid username or password');
        const error = Error('Invalid username or password');
        error.status = 401;
        throw error;
    }

    // JWT with id/username
    const token = jwt.sign({ 
        id: user.user_id,
        username: user.username
    }, 
        JWT_SECRET, { 
        algorithm: 'HS256',
    });
    console.log('Generated Token:', token);
    return { token };
}

//Create movie
const createMovie = async ({movie_name, movie_img, movie_description, price}) => {
    const SQL = /*SQL*/ `
    INSERT INTO movies (
        movie_id,
        movie_name,
        movie_img,
        movie_description,
        price
    )
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `;
    const response = await pool.query(SQL, [
        uuid.v4(), 
        movie_name, 
        movie_img, 
        movie_description,
        price
    ])
    return response.rows[0];
}

// Get functions to retrieve data from tables is put here
const getMovies = async() => {
    const SQL = /*sql*/ `
    SELECT * FROM movies
    `
    const response = await pool.query(SQL)
    return response.rows
}

// Create Genre Function -
const createGenre = async ({ genre_name }) => {
    const SQL = /*sql*/ `
        INSERT INTO genres (
            genre_id, 
            genre_name
        )
        VALUES ($1, $2)
        RETURNING *;
    `;
    const response = await pool.query(SQL, [uuid.v4(), genre_name]);
    return response.rows[0];
}

// Add Movie to Genre -
const addGenreToMovie = async ({ movie_id, genre_id }) => {
    const SQL = /*sql*/ `
        INSERT INTO movie_genres (
            movie_id, 
            genre_id
        )
        VALUES ($1, $2)
        RETURNING *;
    `;
    await pool.query(SQL, [movie_id, genre_id]);
};

// Fetch Movies with Genres -
const getMoviesWithGenres = async () => {
    const SQL = /*sql*/ `
    SELECT
        m.movie_id,
        m.movie_name,
        m.movie_img,
        m.movie_description,
        m.price,
        ARRAY_AGG(g.genre_name) AS genres
    FROM movies m
    LEFT JOIN movie_genres mg ON m.movie_id = mg.movie_id
    LEFT JOIN genres g ON mg.genre_id = g.genre_id
    GROUP BY m.movie_id;
    `;
    const response = await pool.query(SQL);
    return response.rows;
}

module.exports = {
    pool,
    connectDB,
    createTables,
    createUser,
    authenticateUser,
    createMovie,
    getMovies,
    createGenre,
    addGenreToMovie,
    getMoviesWithGenres,
}