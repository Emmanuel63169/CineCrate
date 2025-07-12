// This is where the TABLES for the database are made and connected
require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: false,
});

const uuid = require("uuid");
const bcrypt = require("bcrypt")
const jwt = process.env.JWT || "lmao"; // cover in .env later

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
        DROP TABLE IF EXISTS users CASCADE;
        DROP TABLE IF EXISTS movies CASCADE;
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
        
        
        // Create categories table

        // Create Cart_movies Table

        // Create Carts Table


    } catch (error) {
        console.error('Error Creating Tables', error)
    }
    
}

// Create Functions to sort into tables is made here

//Create User - Register
const createUser = async ({username, email, password_hash, is_admin = false}) => {
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
        password_hash,
        is_admin
    ]);
    return response.rows[0];
}

// Authentication
const authenticateUser = async ({ username, password }) => {
    console.log('Authenticating User: ', username);
    const authenticateUsers = /*sql*/ `
        SELECT user_id, password_hash
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

    const storedPasswordHash = response.rows[0].password_hash;

    console.log('Password entered: ', password);
    console.log('Stored hash: ', storedPasswordHash);

    // Compared provided password with the stored hash
    const isPasswordValid = await bcrypt.compare(password, storedPasswordHash)

    if (!response.rows.length || !isPasswordValid) {
        console.error('Invalid username or password');
        const error = Error('Invalid username or password');
        error.status = 401;
        throw error;
    }

    const token = jwt.sign({ id: response.rows[0].id }, JWT , {
        algorith: 'HS256',
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

module.exports = {
    pool,
    connectDB,
    createTables,
    createUser,
    authenticateUser,
    createMovie,
    getMovies,
}