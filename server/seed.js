// This is where the seeding is created to put into TABLES

const {
    pool,
    createUser,
    createMovie
} = require('./db.js')

async function seedData() {
    try {
        await pool.connect();

        console.log('Seeding Data')

        // Movies -
        const [jaws, star_Wars, titanic, wizard_of_oz] = await Promise.all([
            createMovie({ movie_name: 'Jaws',          movie_img: '-_-_-', movie_description: 'Shark movie', price: '15' }),
            createMovie({ movie_name: 'Star Wars',     movie_img: '-_-_-', movie_description: 'Sars movie', price: '10' }),
            createMovie({ movie_name: 'Titanic',       movie_img: '-_-_-', movie_description: 'Ship movie', price: '20' }),
            createMovie({ movie_name: 'Wizard of Oz',  movie_img: '-_-_-', movie_description: 'Wizard movie', price: '15' }),
        ])

        // Users -


    } catch (error) {
        console.error('Error during seeding:', error);
    }
}

module.exports = {
    seedData
}