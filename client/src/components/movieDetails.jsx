// Page to view movie Details

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CSS/movieDetails.css" 

export default function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const MOVIES_API_URL = "http://localhost:3000/api/movies";

    const { movieId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await fetch(`${MOVIES_API_URL}/${movieId}`);
                const data = await response.json();
                console.log("data => ", data)
                setMovie(data)
            } catch (error) {
                console.error("Error Fetching the Movie :(", error)
            }
        };
        getMovie();
    }, [movieId]);
    
    const handleGoBack = () => {
        navigate(-1);
    }

    return(
        <>
            <div className="movieDetailsPage">
                { !movie ? (
                    <p>Loading Movie Deatails...</p>
                ) : (
                    <div className="movieDetailsCard">
                        <div className="detailsHeader">
                            <button onClick={handleGoBack}>Go Back</button>
                        </div>
                        <div className="movieDetails">
                            <h2 className="movieTitle">{movie.movie_name}</h2>
                            <div className="movieInfo">
                                <img src={movie.movie_img} alt={movie.movie_name} />
                                <p>{movie.movie_description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}