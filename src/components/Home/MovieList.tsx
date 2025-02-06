import { MovieCardType } from '../../utils/constant'
import MovieCard from './MovieCard'

interface MovieListProps {
    movies: MovieCardType[]
}
const MovieList = ({ movies }: MovieListProps) => {
    return (
    <div className='mt-14'>
        <h1 className='text-3xl font-bold text-yellow-500'>Top Rated Movies</h1>
        <div className='row row-cols-6'>
            {
                movies.length > 0 && movies.map((data,ind) => (
                    <MovieCard key={ind} movieData={data}/>
                ))
            }
        </div>
    </div>
    )
}

export default MovieList