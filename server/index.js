// Setup for backend server goes here
require ('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

console.log('JWT_SECRET from env:', process.env.JWT_SECRET);

const {connectDB, createTables, createUser, authenticateUser, createMovie,} = require('./db.js')
const { seedData } = require('./seed.js')

const cors = require('cors')

const express = require('express');
const app = express();
const port = 3000;
const router = require('./api');

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', router)

app.use((err, req, res, next) => {
    console.error(' SERVER ERROR: ', err);
    res.status(500).json({message: 'Internal server error', error: err.message });
});

const init = async () => {
    await connectDB();
    await createTables();
    await seedData();

    app.listen(port, () => console.log(`listening on PORT ${port}`));
}


init();