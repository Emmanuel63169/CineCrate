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
            createMovie ({ 
                movie_name: 'Jaws',
                movie_img: 'https://ts3.mm.bing.net/th?id=OIP.ee4ZY6ofX4hjnRUAyYjfzQHaLN&pid=15.1',                             
                movie_description: 'Shark movie',  
                price: '15' 
            }),

            createMovie ({ 
                movie_name: 'Star Wars',
                movie_img: 'https://th.bing.com/th/id/OIP.rO4GulqnfIW-9wh9YwpgsgHaKa?w=203&h=286&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Sars movie',
                price: '10' 
            }),

            createMovie ({ 
                movie_name: 'Titanic',
                movie_img: 'https://th.bing.com/th/id/OIP.w5yfrTQcJGzTVNmEVdYjuAHaEK?w=308&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Ship movie',
                price: '20' 
            }),

            createMovie({ 
                movie_name: 'Wizard of Oz',
                movie_img: 'https://th.bing.com/th/id/OIP.As8UvZ99DCahQgKRaXVIOgHaEK?w=298&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Wizard movie',
                price: '10' 
            }),

            createMovie({ 
                movie_name: 'Harry Poter',
                movie_img: 'https://th.bing.com/th/id/OIP.9a516ufFrYCswcoK9WVdsgHaDt?w=340&h=175&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Wizard movie 2',
                price: '15'
            }),

            // Example Display -
            // createMovie ({
            //     movie_name: '',
            //     movie_img: '',
            //     movie_description: '',
            //     price: ''
            // }),
        ])

        // Users -


    } catch (error) {
        console.error('Error during seeding:', error);
    }
}

module.exports = {
    seedData
}