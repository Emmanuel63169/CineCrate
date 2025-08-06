// This is where the seeding is created to put into TABLES

const {
    pool,
    createUser,
    createMovie,
    createGenre
} = require('./db.js')

async function seedData() {
    try {
        await pool.connect();

        console.log('Seeding Data')


        // Genres -
        const [ action, sciFi, drama, fantasy, animated, horror, comedy ] = await Promise.all([
            createGenre({ genre_name: 'Action' }),
            createGenre({ genre_name: 'SciFi' }),
            createGenre({ genre_name: 'Drama' }),
            createGenre({ genre_name: 'Fantasy' }),
            createGenre({ genre_name: 'Animated' }),
            createGenre({ genre_name: 'Horror'}),
            createGenre({ genre_name: 'Comedy'})
        ])

        // Movies -
        const [jaws, star_wars, titanic, wizard_of_oz, harry_potter_1, the_lion_king, wall_e, jurassic_park, jurassic_park_2, jurassic_park_3, coraline, a_bugs_life, barbie, openheimer, dinosaur, ice_age, ice_age_2, ice_age_3, ice_age_4, up, casablanca, indiana_jones, indiana_jones_2, indiana_jones_3, harry_potter_2, harry_potter_3, harry_potter_4, harry_potter_5, harry_potter_6, harry_potter_7, harry_potter_8, lord_of_the_rings, lord_of_the_rings_2, lord_of_the_rings_3, logan, the_shining, dumb_and_dumber, knives_out, spiderman_into_the_spiderverse, howls_moving_castle, the_dark_knight, the_lego_batman_movie, joker, the_batman, the_lego_movie, no_country_for_old_men, pulp_fiction ] = await Promise.all([
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
                movie_name: "Harry Potter and the Sorcerer's Stone",
                movie_img: 'https://th.bing.com/th/id/OIP.qxom_sjZL2E7z4iFVGUfGwHaKJ?w=203&h=278&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Wizard with stone movie',
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
            createMovie ({
                movie_name: 'Casablanca',
                movie_img: 'https://th.bing.com/th/id/OIP.YDnUQKq5pwQ9jPq38wO9KAHaOH?w=181&h=345&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'White house movie',
                price: '18'
            }),
            createMovie ({
                movie_name: 'Indiana Jones and the Temple of Doom',
                movie_img: 'https://th.bing.com/th/id/OIP.n2nVTctdAKMy9x03t5-zJwHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Explorer temple movie',
                price: '12'
            }),
            createMovie ({
                movie_name: 'Indiana Jones and the Raiders of the Lost Ark',
                movie_img: 'https://th.bing.com/th/id/OIP.gINOSGB8zKh5RoHMfCApYwHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Explorer and raiders movie',
                price: '12'
            }),
            createMovie ({
                movie_name: 'Indiana Jones and the Dial of Destiny',
                movie_img: 'https://th.bing.com/th/id/OIP.cZozIYH93YtrPLAL2LSA6AHaKZ?w=203&h=285&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Explorer with dial movie',
                price: '24'
            }),
            createMovie ({
                movie_name: 'Harry Potter and the Chamber of Secrets',
                movie_img: 'https://th.bing.com/th/id/OIP.SE6706HaGzPkTT3YX919zQHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Wizard and room movie',
                price: '12'
            }),
            createMovie ({
                movie_name: 'Harry Potter and the Prisoner of Azkaban',
                movie_img: 'https://th.bing.com/th/id/OIP.VcTbX00bq_RZIiFyhak1NwHaLE?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Wizard and prisoner movie',
                price: '14'
            }),
            createMovie ({
                movie_name: 'Harry Potter and the Goblet of Fire',
                movie_img: 'https://th.bing.com/th/id/OIP.JcU7XYLwYHE8YF0hF4UNGgHaK1?w=203&h=298&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Wizard and a cup movie',
                price: '16'
            }),
            createMovie ({
                movie_name: 'Harry Potter and the Order of the Phoenix',
                movie_img: 'https://th.bing.com/th/id/OIP.lqDIf260ielPfX4NOZ-8LQHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Wizard and a bird on fire movie',
                price: '18'
            }),
            createMovie ({
                movie_name: 'Harry Potter and the Half-Blood Prince',
                movie_img: 'https://th.bing.com/th/id/OIP.FBTsaVQXTxSSx8k8IGMfewHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Wizard and prince movie',
                price: '18'
            }),
            createMovie ({
                movie_name: 'Harry Potter and the Deathly Hallows: Part 1',
                movie_img: 'https://th.bing.com/th/id/OIP.x5BmOOYLdswLudoMsJ2z2AAAAA?w=203&h=287&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Wizard and stuff movie?',
                price: '16'
            }),
            createMovie ({
                movie_name: 'Harry Poter and the Deathly Hallows: Part 2',
                movie_img: 'https://th.bing.com/th/id/OIP.JeA89XFSCCEAPj_izKJKfQHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'I dont even know movie',
                price: '18'
            }),
            createMovie ({
                movie_name: 'The Lord of the Rings: The Fellowship of the Ring',
                movie_img: 'https://th.bing.com/th/id/OIP.oxFV3VAxs_skP4thtGu1FgHaLB?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: '',
                price: '13'
            }),
            createMovie ({
                movie_name: 'The Lord of the Rings: The Two Towers',
                movie_img: 'https://th.bing.com/th/id/OIP.zxc7JglYEInZAb0Wrma0KAHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Man with rings and two towers movie.',
                price: '14'
            }),
            createMovie ({
                movie_name: 'The Lord of the Rings: The Return of the King',
                movie_img: 'https://th.bing.com/th/id/OIP.mF8hZd3_gzktA2BZMTlcLAHaKr?w=203&h=293&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Man with rings and a king movie',
                price: '15'
            }),
            createMovie ({
                movie_name: 'Logan',
                movie_img: 'https://th.bing.com/th/id/OIP.gn54sjB_4iFMiNPW5Yf46QHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Regular man movie',
                price: '16'
            }),
            createMovie ({
                movie_name: 'The Shining',
                movie_img: 'https://th.bing.com/th/id/OIP.PdsAH3dd0TFE4kqpmNdjTwHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: '',
                price: '8'
            }),
            createMovie ({
                movie_name: 'Dumb and Dumber',
                movie_img: 'https://th.bing.com/th/id/OIP.ESMsEc-T--w5KAwSj4sDEwHaKp?w=203&h=292&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'two shallow fellas movie',
                price: '8'
            }),
            createMovie ({
                movie_name: 'Knives Out',
                movie_img: 'https://th.bing.com/th/id/OIP.Q6A2fOU9NMGrvtBLL_lqnQHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Sharp utensil movie',
                price: '16'
            }),
            createMovie ({
                movie_name: 'Spiderman into the Spider-Verse',
                movie_img: 'https://th.bing.com/th/id/OIP.GfHRlxIU_ZTycABbFZZVaAHaJ4?w=203&h=271&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Spiderman animated movie',
                price: '18'
            }),
            createMovie ({
                movie_name: "Howl's Moving Castle",
                movie_img: 'https://th.bing.com/th/id/OIP.d97EyMCON2iXzqGE1hmbZgHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Castle of Howl moves movie',
                price: '14'
            }),
            createMovie ({
                movie_name: 'The Dark Knight',
                movie_img: 'https://th.bing.com/th/id/OIP.NN9rKH-vZbFgtH4FuoW7OwHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Local man dresed as bat assaults insane elderly man movie',
                price: '13'
            }),
            createMovie ({
                movie_name: 'The Lego Batman Movie',
                movie_img: 'https://th.bing.com/th/id/OIP.zUgckVH9a3wjtgd17qDVagHaLP?w=202&h=308&c=7&r=0&o=5&pid=1.7',
                movie_description: 'Local man dressed as bat is lego movie',
                price: '12'
            }),
            createMovie ({
                movie_name: 'Joker',
                movie_img: 'https://th.bing.com/th/id/OIP.Vwz5WQJCXWK_2YbyRmzZrAHaJQ?w=203&h=254&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Joker movie',
                price: '22'
            }),
            createMovie ({
                movie_name: 'The Batman',
                movie_img: 'https://th.bing.com/th/id/OIP.UwYBwFZrivOHI5RrY0tklQHaKd?w=203&h=287&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Batman movie',
                price: '26'
            }),
            createMovie ({
                movie_name: 'The Lego Movie',
                movie_img: 'https://th.bing.com/th/id/OIP.Me85jP3x0SO_BTko7GeKfQHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Lego movie',
                price: '14'
            }),
            createMovie ({
                movie_name: 'No Country For Old Men',
                movie_img: 'https://th.bing.com/th/id/OIP.L-LDZpmrKkYJyfYIKPehNwHaLD?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'No land with old people movie',
                price: '14'
            }),
            createMovie ({
                movie_name: 'Pulp Fiction',
                movie_img: 'https://th.bing.com/th/id/OIP.Kkraw2_oAaCQEje1_s8zOgHaJ8?w=203&h=273&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Fake orange movie',
                price: '10'
            }),

            // Example Display -
            // createMovie ({
            //     movie_name: '',
            //     movie_img: '',
            //     movie_description: '',
            //     price: ''
            // }),
        ])
        
        // Movies / Genres Link -
        await Promise.all([
            addGenreToMovie({ movie_id: jaws.movie_id,                            genre_id: horror.genre_id   }),
            addGenreToMovie({ movie_id: star_wars.movie_id,                       genre_id: sciFi.genre_id    }),
            addGenreToMovie({ movie_id: titanic.movie_id,                         genre_id: drama.genre_id    }),
            addGenreToMovie({ movie_id: wizard_of_oz.movie_id,                    genre_id: fantasy.genre_id  }),
            addGenreToMovie({ movie_id: harry_potter_1.movie_id,                  genre_id: fantasy.genre_id  }),
            addGenreToMovie({ movie_id: the_lion_king.movie_id,                   genre_id: animated.genre_id }),
            addGenreToMovie({ movie_id: wall_e.movie_id,                          genre_id: animated.genre_id }),
            addGenreToMovie({ movie_id: jurassic_park.movie_id,                   genre_id: action.genre_id   }),
            addGenreToMovie({ movie_id: jurassic_park_2.movie_id,                 genre_id: action.genre_id   }),
            addGenreToMovie({ movie_id: jurassic_park_3.movie_id,                 genre_id: action.genre_id   }),
            addGenreToMovie({ movie_id: coraline.movie_id,                        genre_id: animated.genre_id }),
            addGenreToMovie({ movie_id: a_bugs_life.movie_id,                     genre_id: animated.genre_id }),
            addGenreToMovie({ movie_id: barbie.movie_id,                          genre_id: drama.genre_id    }),
            addGenreToMovie({ movie_id: openheimer.movie_id,                      genre_id: drama.genre_id    }),
            addGenreToMovie({ movie_id: dinosaur.movie_id,                        genre_id: animated.genre_id }),
            addGenreToMovie({ movie_id: ice_age.movie_id,                         genre_id: animated.genre_id }),
            addGenreToMovie({ movie_id: ice_age_2.movie_id,                       genre_id: animated.genre_id }),
            addGenreToMovie({ movie_id: ice_age_3.movie_id,                       genre_id: animated.genre_id }),
            addGenreToMovie({ movie_id: ice_age_4.movie_id,                       genre_id: animated.genre_id }),
            addGenreToMovie({ movie_id: up.movie_id,                              genre_id: animated.genre_id }),
            addGenreToMovie({ movie_id: casablanca.movie_id,                      genre_id: drama.genre_id    }),
            addGenreToMovie({ movie_id: indiana_jones.movie_id,                   genre_id: action.genre_id   }),
            addGenreToMovie({ movie_id: indiana_jones_2.movie_id,                 genre_id: action.genre_id   }),
            addGenreToMovie({ movie_id: indiana_jones_3.movie_id,                 genre_id: action.genre_id   }),
            addGenreToMovie({ movie_id: harry_potter_2.movie_id,                  genre_id: fantasy.genre_id  }),
            addGenreToMovie({ movie_id: harry_potter_3.movie_id,                  genre_id: fantasy.genre_id  }),
            addGenreToMovie({ movie_id: harry_potter_4.movie_id,                  genre_id: fantasy.genre_id  }),
            addGenreToMovie({ movie_id: harry_potter_5.movie_id,                  genre_id: fantasy.genre_id  }),
            addGenreToMovie({ movie_id: harry_potter_6.movie_id,                  genre_id: fantasy.genre_id  }),
            addGenreToMovie({ movie_id: harry_potter_7.movie_id,                  genre_id: fantasy.genre_id  }),
            addGenreToMovie({ movie_id: harry_potter_8.movie_id,                  genre_id: fantasy.genre_id  }),
            addGenreToMovie({ movie_id: lord_of_the_rings.movie_id,               genre_id: fantasy.genre_id  }),
            addGenreToMovie({ movie_id: lord_of_the_rings_2.movie_id,             genre_id: fantasy.genre_id  }),
            addGenreToMovie({ movie_id: lord_of_the_rings_3.movie_id,             genre_id: fantasy.genre_id  }),
            addGenreToMovie({ movie_id: logan.movie_id,                           genre_id: action.genre_id   }),
            addGenreToMovie({ movie_id: the_shining.movie_id,                     genre_id: horror.genre_id   }),
            addGenreToMovie({ movie_id: dumb_and_dumber.movie_id,                 genre_id: comedy.genre_id   }),
            addGenreToMovie({ movie_id: knives_out.movie_id,                      genre_id: horror.genre_id   }),
            addGenreToMovie({ movie_id: spiderman_into_the_spiderverse.movie_id,  genre_id: animated.genre_id }),
            addGenreToMovie({ movie_id: howls_moving_castle.movie_id,             genre_id: animated.genre_id }),
            addGenreToMovie({ movie_id: the_dark_knight.movie_id,                 genre_id: action.genre_id   }),
            addGenreToMovie({ movie_id: the_lego_batman_movie.movie_id,           genre_id: animated.genre_id }),
            addGenreToMovie({ movie_id: joker.movie_id,                           genre_id: drama.genre_id    }),
            addGenreToMovie({ movie_id: the_batman.movie_id,                      genre_id: drama.genre_id    }),
            addGenreToMovie({ movie_id: the_lego_movie.movie_id,                  genre_id: animated.genre_id }),
            addGenreToMovie({ movie_id: no_country_for_old_men.movie_id,          genre_id: drama.genre_id    }),
            addGenreToMovie({ movie_id: pulp_fiction.movie_id,                    genre_id: action.genre_id   }),
        ])

        // Users -
        
        console.log('Seedign Complete');
    } catch (error) {
        console.error('Error during seeding:', error);
    }
}

module.exports = {
    seedData
}