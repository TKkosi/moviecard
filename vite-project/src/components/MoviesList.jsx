import Movie from "./Movies"
import movies from "../../data/movies"

const MoviesList = () => {
    console.log(movies);
    
    return (
        <div>
            {movies.map((movie, index) =>(
                <Movie key={index} id={movie.id} title={movie.title} year={movie.year} rate={movie.rate}/>
            ))}
        </div>
    )
}

export default MoviesList
