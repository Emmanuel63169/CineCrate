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
} = require('./db')

function verifyToken(req, res, next) {

}

module.exports = router;