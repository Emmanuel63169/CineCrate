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

module.exports = router;