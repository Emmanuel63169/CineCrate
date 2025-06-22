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
} = require('./db')

// function verifyToken(req, res, next) {

// }

// GET/api/movies
router.get('/movies', async(req, resizeBy, next) => {
    try{
        const response = await getMovies();
        if(response.length === 0) {
            return resizeBy.status(400).json({message: 'No Movies?'})
        }
        resizeBy.status(200).send(response)
    } catch (error) {
        next(error)
    }
})

module.exports = router;