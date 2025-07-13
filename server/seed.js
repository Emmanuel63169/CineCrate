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
                movie_img: 'https://th.bing.com/th/id/OIP.7mt_lYuF3fYK7WWS_xzyAQHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Wizard movie',
                price: '10' 
            }),

            createMovie({ 
                movie_name: 'Harry Poter',
                movie_img: 'https://th.bing.com/th/id/OIP.9a516ufFrYCswcoK9WVdsgHaDt?w=340&h=175&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Wizard movie 2',
                price: '15'
            }),

            createMovie ({
                movie_name: 'The Lion King',
                movie_img: 'https://th.bing.com/th/id/OIP.-OFkUcfCgtxiolQLHu63UQHaLA?w=203&h=301&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Lion movie',
                price: '12'
            }),
            
            createMovie ({
                movie_name: 'Wall-e',
                movie_img: 'https://th.bing.com/th/id/OIP.qAZnW4QwR0KDL9170CJ93wHaEK?w=291&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Robot movie',
                price: '12.50'
            }),
            
            createMovie ({
                movie_name: 'Jurassic Park',
                movie_img: 'https://th.bing.com/th/id/OIP.z_IGyEwoMc6nya58unztuwHaFj?w=236&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Dino movie',
                price: '10'
            }),
            
            createMovie ({
                movie_name: 'Jurassic Park 2: The Lost World',
                movie_img: 'https://th.bing.com/th/id/OIP.fchFSpRm9yBN1p-EaEnXPgHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Dino movie 2',
                price: '12'
            }),
            
            createMovie ({
                movie_name: 'Jurassic Park 3',
                movie_img: 'https://th.bing.com/th/id/OIP.oHQEyDcw-F-QHhHk4vzo0wHaLQ?w=202&h=308&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Dino movie 3',
                price: '14'
            }),
            
            createMovie ({
                movie_name: 'Coraline',
                movie_img: 'https://th.bing.com/th/id/OIP.jak-_B6SueQX7fYdk-eI_QHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Coraline movie',
                price: '8'
            }),
            
            createMovie ({
                movie_name: 'A Bugs Life',
                movie_img: 'https://th.bing.com/th/id/OIP.n_Qntoxt44hF7wen8WGk9gHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Bug movie',
                price: '12'
            }),
            
            createMovie ({
                movie_name: 'Barbie',
                movie_img: 'https://th.bing.com/th/id/OIP.IaTyNv55ids6r6h7ueysPQHaKX?w=203&h=284&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Barbie movie',
                price: '24'
            }),
            
            createMovie ({
                movie_name: 'Openheimer',
                movie_img: 'https://th.bing.com/th/id/OIP.uw5goEVmYIllDR5IA6WNIQHaKX?w=203&h=284&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Bomb movie',
                price: '24'
            }),
            
            createMovie ({
                movie_name: 'Dinosaur',
                movie_img: 'https://i.pinimg.com/originals/0a/f7/25/0af725fc9e57d5412a070f0f0a81181f.jpg',
                movie_description: 'Disney jurassic park',
                price: '8'
            }),
            
            createMovie ({
                movie_name: 'Ice Age',
                movie_img: 'https://th.bing.com/th/id/OIP.aJd6o1yLfd-Q_GBuqO1NHQHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Mammoth movie',
                price: '14'
            }),
            
            createMovie ({
                movie_name: 'Ice Age 2',
                movie_img: 'https://th.bing.com/th/id/OIP.yx3dToNHTm_v8U5k4uLjMQHaK9?w=203&h=301&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Mammoth movie 2',
                price: '16'
            }),
            
            createMovie ({
                movie_name: 'Ice Age 3; Dawn of the Dinosaur',
                movie_img: 'https://th.bing.com/th/id/OIP.fpvq1QNZOTUTkOye6WABZQHaKT?w=136&h=190&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Mammoth movie 3',
                price: '18'
            }),
            
            createMovie ({
                movie_name: 'Ice Age 4; Continnental Drift',
                movie_img: 'https://th.bing.com/th/id/OIP.a9_kQ8bZldKonJUIWlTXlgHaK7?w=203&h=300&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Mammoth movie 4',
                price: '20'
            }),
            
            createMovie ({
                movie_name: 'Up',
                movie_img: 'https://th.bing.com/th/id/OIP.4ZIVYz51uLDlY6GlzK3frgAAAA?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'house movie?',
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