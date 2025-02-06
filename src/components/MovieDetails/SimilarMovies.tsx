import { useEffect, useState } from 'react'
import { baseApi } from '../../api/AxiosInstance'
import { MovieCardType } from '../../utils/constant'
import MovieList from '../Home/MovieList'
import LoadMoreButton from '../Button/LoadMoreButton'

function SimilarMovies ({movieId}: { movieId: string }) {
    
    const [similarMovies, setSimilarMovies] = useState<MovieCardType[]>([])
    const [page, setPage] = useState(0)
    
    const fetchSimilarMovies = async (page:number)=>{
        try{
            const response = await baseApi.get(`/3/movie/${movieId}/similar?language=en-US&page=${page}`)
            setSimilarMovies(prev=>[...prev, ...response.data.results])
        }
        catch(err){
            console.log("Fetch similar movies error", err)
        }
    }
    const handleLoadMore = () => {
        fetchSimilarMovies(page+1)
        setPage(prev=>prev+1)
    }

    useEffect(() => {
        setSimilarMovies([])
        fetchSimilarMovies(1)
        setPage(prev=>prev+1)
    }, [movieId])
    
    return (
    <div>
        <MovieList movies={similarMovies} title="Similar Movies"/>
        <div onClick={()=> handleLoadMore()}>
            <LoadMoreButton/>
        </div>
    </div>
    )
}

export default SimilarMovies