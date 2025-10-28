// This is where the seeding is created to put into TABLES

const {
    pool,
    createUser,
    createMovie,
    createGenre,
    addGenreToMovie
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
                movie_description: 'When a massive killer shark unleashes chaos on a beach community off Long Island, its up to the local police chief, a marine biologist, and an old seafearer to hunt the beast down.',  
                price: '15' 
            }),
            createMovie ({ 
                movie_name: 'Star Wars',
                movie_img: 'https://th.bing.com/th/id/OIP.rO4GulqnfIW-9wh9YwpgsgHaKa?w=203&h=286&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Luke Skywalker joins forces with a Jadi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire world destroyin battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.',
                price: '10' 
            }),
            createMovie ({ 
                movie_name: 'Titanic',
                movie_img: 'https://th.bing.com/th/id/OIP.w5yfrTQcJGzTVNmEVdYjuAHaEK?w=308&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
                price: '20' 
            }),
            createMovie({ 
                movie_name: 'Wizard of Oz',
                movie_img: 'https://th.bing.com/th/id/OIP.7mt_lYuF3fYK7WWS_xzyAQHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Younf Dorothy Gale and her dog Toto are swept away by a tornado from their Kansas farm to the magical Land of Oz and embark on a quest with three new friends to see the Wizard who can return her to her home and fullfil the others wishes.',
                price: '10' 
            }),
            createMovie({ 
                movie_name: "Harry Potter and the Sorcerer's Stone",
                movie_img: 'https://th.bing.com/th/id/OIP.qxom_sjZL2E7z4iFVGUfGwHaKJ?w=203&h=278&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'An orphaned boy enrolls in a school of Wizardry, where he learns the thruth about himself, his family and the terrible evil that haunts the magical world.',
                price: '15'
            }),
            createMovie ({
                movie_name: 'The Lion King',
                movie_img: 'https://th.bing.com/th/id/OIP.-OFkUcfCgtxiolQLHu63UQHaLA?w=203&h=301&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.',
                price: '12'
            }),
            createMovie ({
                movie_name: 'Wall-e',
                movie_img: 'https://th.bing.com/th/id/OIP.qAZnW4QwR0KDL9170CJ93wHaEK?w=291&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'A robot who is responsible for cleaning a waste-covered Earth meets another robot and falls in love with her. Together, they set out on a journey that will alter the fate of mankind.',
                price: '12.50'
            }),
            createMovie ({
                movie_name: 'Jurassic Park',
                movie_img: 'https://th.bing.com/th/id/OIP.z_IGyEwoMc6nya58unztuwHaFj?w=236&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'An industrialist invites some experts to visit his theme park of cloned dinosaurs. After a power failure, the creatures run loose, putting everyones lives, including his grandchildrens, in danger',
                price: '10'
            }),
            
            createMovie ({
                movie_name: 'The Lost World: Jurassic Park',
                movie_img: 'https://th.bing.com/th/id/OIP.fchFSpRm9yBN1p-EaEnXPgHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'A reasercher team is sent to the Jurassic Park Site B island to study the dinosaurs there, while an InGen team approaches with another agenda.',
                price: '12'
            }),
            createMovie ({
                movie_name: 'Jurassic Park III',
                movie_img: 'https://th.bing.com/th/id/OIP.oHQEyDcw-F-QHhHk4vzo0wHaLQ?w=202&h=308&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'A decidedly odd couple with ulterior motives convince Dr.Grant to go to Isla Sorna for a holiday, but their unexpected landing startles the Islands new inhibitants.',
                price: '14'
            }),
            createMovie ({
                movie_name: 'Coraline',
                movie_img: 'https://th.bing.com/th/id/OIP.jak-_B6SueQX7fYdk-eI_QHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Wandering her rambling old house in her boring new town, a young girl discovers a hidden door to a strangely idealized version of her life that seems too good to be true.',
                price: '8'
            }),
            createMovie ({
                movie_name: 'A Bugs Life',
                movie_img: 'https://th.bing.com/th/id/OIP.n_Qntoxt44hF7wen8WGk9gHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'A misfit ant, looking for "warriors" to save his colony from greedy grasshoppers, recruits a group of bugs that turn out to be an inept circus troupe.',
                price: '12'
            }),
            createMovie ({
                movie_name: 'Barbie',
                movie_img: 'https://th.bing.com/th/id/OIP.IaTyNv55ids6r6h7ueysPQHaKX?w=203&h=284&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Barbie and Ken are having the time of their lives in the seemingly perfect world of Barbie land. However, when they get a chance to go to the outside world, they soon discover the joys and perils of living among regular humans.',
                price: '24'
            }),
            createMovie ({
                movie_name: 'Openheimer',
                movie_img: 'https://th.bing.com/th/id/OIP.uw5goEVmYIllDR5IA6WNIQHaKX?w=203&h=284&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'A dramatization of the life story of J. Robert Oppenheimer, the physicist who had a hand in the development of the atomic bombs that brought the end to World War II.',
                price: '24'
            }),
            createMovie ({
                movie_name: 'Dinosaur',
                movie_img: 'https://i.pinimg.com/originals/0a/f7/25/0af725fc9e57d5412a070f0f0a81181f.jpg',
                movie_description: 'An orphaned dinosaur raised by lemurs joins an arduous trek to a sanctuary after a meteorite shower destroys his family home.',
                price: '8'
            }),
            createMovie ({
                movie_name: 'Ice Age',
                movie_img: 'https://th.bing.com/th/id/OIP.aJd6o1yLfd-Q_GBuqO1NHQHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Manny the mammoth, Sid the Loquacious sloth, and Diego the sabre-toothed tiger go on  a comical quest to return a human baby back to his father, across a world on the brinck of an ice age.',
                price: '14'
            }),
            createMovie ({
                movie_name: 'Ice Age: The Meltdown',
                movie_img: 'https://th.bing.com/th/id/OIP.yx3dToNHTm_v8U5k4uLjMQHaK9?w=203&h=301&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Manny, Sid, and Diego discover that the ice age is coming to an end, and join everybody for a journey to higher ground. On the trip, they discover that Manny is not in fact the last of the woolly mammoths.',
                price: '16'
            }),
            createMovie ({
                movie_name: 'Ice Age: Dawn of the Dinosaur',
                movie_img: 'https://th.bing.com/th/id/OIP.fpvq1QNZOTUTkOye6WABZQHaKT?w=136&h=190&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'When Sid attempts to adopt three dinosaur eggs gets him abducted by their real mother to an underground lost world, his friends attemp to rescue him.',
                price: '18'
            }),
            createMovie ({
                movie_name: 'Ice Age: Continnental Drift',
                movie_img: 'https://th.bing.com/th/id/OIP.a9_kQ8bZldKonJUIWlTXlgHaK7?w=203&h=300&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Manny, Diego, and Sid embark upon another adventure after their continent is set adrift. Using an iceberg as a ship, they encounter sea creatures and battle pirates as they explore a new world.',
                price: '20'
            }),
            createMovie ({
                movie_name: 'Up',
                movie_img: 'https://th.bing.com/th/id/OIP.4ZIVYz51uLDlY6GlzK3frgAAAA?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: '78-year-old Carl Fredricksen travels to South America in his house equipped with balloons, inadvertently taking a young stowaway.',
                price: '15'
            }),
            createMovie ({
                movie_name: 'Casablanca',
                movie_img: 'https://th.bing.com/th/id/OIP.YDnUQKq5pwQ9jPq38wO9KAHaOH?w=181&h=345&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.',
                price: '18'
            }),
            createMovie ({
                movie_name: 'Indiana Jones and the Temple of Doom',
                movie_img: 'https://th.bing.com/th/id/OIP.n2nVTctdAKMy9x03t5-zJwHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'In 1935, Indiana Jones is tasked by Indian villagers with reclaiming a sacred stone stolen from them by a secret cult.',
                price: '12'
            }),
            createMovie ({
                movie_name: 'Indiana Jones and the Raiders of the Lost Ark',
                movie_img: 'https://th.bing.com/th/id/OIP.gINOSGB8zKh5RoHMfCApYwHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'In 1936, archaeologist Indiana Jones is tasked by Army Intelligence to help locate a legendary ancient power, the Ark of Covenant, before the Nazis get it first.',
                price: '12'
            }),
            createMovie ({
                movie_name: 'Indiana Jones and the Dial of Destiny',
                movie_img: 'https://th.bing.com/th/id/OIP.cZozIYH93YtrPLAL2LSA6AHaKZ?w=203&h=285&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Archaeologist Indiana Jones races against time to retrieve a legendary artifact that can change the course of history.',
                price: '24'
            }),
            createMovie ({
                movie_name: 'Harry Potter and the Chamber of Secrets',
                movie_img: 'https://th.bing.com/th/id/OIP.SE6706HaGzPkTT3YX919zQHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Harry Potter lives his second year at Hogwarts with Ron and Hermione when a message on the wall announces that the legendary Chamber of Secrets has been opened. The trio soon realize that, to save the school, it will take a lot of courage.',
                price: '12'
            }),
            createMovie ({
                movie_name: 'Harry Potter and the Prisoner of Azkaban',
                movie_img: 'https://th.bing.com/th/id/OIP.VcTbX00bq_RZIiFyhak1NwHaLE?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.',
                price: '14'
            }),
            createMovie ({
                movie_name: 'Harry Potter and the Goblet of Fire',
                movie_img: 'https://th.bing.com/th/id/OIP.JcU7XYLwYHE8YF0hF4UNGgHaK1?w=203&h=298&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Harry Potter finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares.',
                price: '16'
            }),
            createMovie ({
                movie_name: 'Harry Potter and the Order of the Phoenix',
                movie_img: 'https://th.bing.com/th/id/OIP.lqDIf260ielPfX4NOZ-8LQHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'With their warning about Lord Voldemorts return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts.',
                price: '18'
            }),
            createMovie ({
                movie_name: 'Harry Potter and the Half-Blood Prince',
                movie_img: 'https://th.bing.com/th/id/OIP.FBTsaVQXTxSSx8k8IGMfewHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as "the property of the Half-Blood Prince" and begins to learn more about Lord Voldemorts dark past.',
                price: '18'
            }),
            createMovie ({
                movie_name: 'Harry Potter and the Deathly Hallows: Part 1',
                movie_img: 'https://th.bing.com/th/id/OIP.x5BmOOYLdswLudoMsJ2z2AAAAA?w=203&h=287&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Harry Potter is tasked with the dangerous and seemingly impossible task of locating and destroying Voldemorts remaining Horcruxes. Harry must rely on Ron and Hermione more than ever, but dark forces threaten to tear them apart.',
                price: '16'
            }),
            createMovie ({
                movie_name: 'Harry Poter and the Deathly Hallows: Part 2',
                movie_img: 'https://th.bing.com/th/id/OIP.JeA89XFSCCEAPj_izKJKfQHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'As the battle between the forces of good and evil in the wizarding world escalates, Harry Potter draws ever closer to his final confrontation with Voldemort.',
                price: '18'
            }),
            createMovie ({
                movie_name: 'The Lord of the Rings: The Fellowship of the Ring',
                movie_img: 'https://th.bing.com/th/id/OIP.oxFV3VAxs_skP4thtGu1FgHaLB?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
                price: '13'
            }),
            createMovie ({
                movie_name: 'The Lord of the Rings: The Two Towers',
                movie_img: 'https://th.bing.com/th/id/OIP.zxc7JglYEInZAb0Wrma0KAHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Saurons new ally, Saruman, and his hordes of Isengard.',
                price: '14'
            }),
            createMovie ({
                movie_name: 'The Lord of the Rings: The Return of the King',
                movie_img: 'https://th.bing.com/th/id/OIP.mF8hZd3_gzktA2BZMTlcLAHaKr?w=203&h=293&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Gandalf and Aragorn lead the World of Men against Saurons army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
                price: '15'
            }),
            createMovie ({
                movie_name: 'Logan',
                movie_img: 'https://th.bing.com/th/id/OIP.gn54sjB_4iFMiNPW5Yf46QHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.',
                price: '16'
            }),
            createMovie ({
                movie_name: 'The Shining',
                movie_img: 'https://th.bing.com/th/id/OIP.PdsAH3dd0TFE4kqpmNdjTwHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'A family heads to an isolated hotel for the winter, where a sinister presence influences the father into violence. At the same time, his psychic son sees horrifying forebodings from both the past and the future.',
                price: '8'
            }),
            createMovie ({
                movie_name: 'Dumb and Dumber',
                movie_img: 'https://th.bing.com/th/id/OIP.ESMsEc-T--w5KAwSj4sDEwHaKp?w=203&h=292&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'After a woman leaves a briefcase at the airport terminal, a dumb limo driver and his dumber friend set out on a hilarious cross-country road trip to Aspen to return it.',
                price: '8'
            }),
            createMovie ({
                movie_name: 'Knives Out',
                movie_img: 'https://th.bing.com/th/id/OIP.Q6A2fOU9NMGrvtBLL_lqnQHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate.',
                price: '16'
            }),
            createMovie ({
                movie_name: 'Spiderman into the Spider-Verse',
                movie_img: 'https://th.bing.com/th/id/OIP.GfHRlxIU_ZTycABbFZZVaAHaJ4?w=203&h=271&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.',
                price: '18'
            }),
            createMovie ({
                movie_name: "Howl's Moving Castle",
                movie_img: 'https://th.bing.com/th/id/OIP.d97EyMCON2iXzqGE1hmbZgHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.',
                price: '14'
            }),
            createMovie ({
                movie_name: 'The Dark Knight',
                movie_img: 'https://th.bing.com/th/id/OIP.NN9rKH-vZbFgtH4FuoW7OwHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.',
                price: '13'
            }),
            createMovie ({
                movie_name: 'The Lego Batman Movie',
                movie_img: 'https://th.bing.com/th/id/OIP.zUgckVH9a3wjtgd17qDVagHaLP?w=202&h=308&c=7&r=0&o=5&pid=1.7',
                movie_description: 'A cooler-than-ever Bruce Wayne must deal with the usual suspects as they plan to rule Gotham City, while discovering that he has accidentally adopted a teenage orphan who wishes to become his sidekick.',
                price: '12'
            }),
            createMovie ({
                movie_name: 'Joker',
                movie_img: 'https://th.bing.com/th/id/OIP.Vwz5WQJCXWK_2YbyRmzZrAHaJQ?w=203&h=254&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Arthur Fleck, a party clown and a failed stand-up comedian, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of chaos in Gotham City.',
                price: '22'
            }),
            createMovie ({
                movie_name: 'The Batman',
                movie_img: 'https://th.bing.com/th/id/OIP.UwYBwFZrivOHI5RrY0tklQHaKd?w=203&h=287&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'When a sadistic serial killer begins murdering key political figures in Gotham, the Batman is forced to investigate the citys hidden corruption and question his familys involvement.',
                price: '26'
            }),
            createMovie ({
                movie_name: 'The Lego Movie',
                movie_img: 'https://th.bing.com/th/id/OIP.Me85jP3x0SO_BTko7GeKfQHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'An ordinary LEGO construction worker, thought to be the prophesied as "special", is recruited to join a quest to stop an evil tyrant from gluing the LEGO universe into eternal stasis.',
                price: '14'
            }),
            createMovie ({
                movie_name: 'No Country For Old Men',
                movie_img: 'https://th.bing.com/th/id/OIP.L-LDZpmrKkYJyfYIKPehNwHaLD?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'Violence and mayhem ensue after a hunter stumbles upon the aftermath of a drug deal gone wrong and over two million dollars in cash near the Rio Grande.',
                price: '14'
            }),
            createMovie ({
                movie_name: 'Pulp Fiction',
                movie_img: 'https://th.bing.com/th/id/OIP.Kkraw2_oAaCQEje1_s8zOgHaJ8?w=203&h=273&c=7&r=0&o=7&pid=1.7&rm=3',
                movie_description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
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
        const [ eman ] = await Promise.all ([
            createUser ({
                username: 'Eman',
                email: 'eman@email.com',
                password_hash: 'emanpassword',
                is_admin: true
            }),
        ])


        console.log('Seedign Complete');
    } catch (error) {
        console.error('Error during seeding:', error);
    }
}

module.exports = {
    seedData
}