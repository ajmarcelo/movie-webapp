import { useEffect, useState } from 'react'
import HomeSlider from '../../components/Home/HomeSlider'
import { baseApi } from '../../api/AxiosInstance'
import { MovieCardType } from '../../utils/constant'
import MovieList from '../../components/Home/MovieList'
import LoadMoreButton from '../../components/Button/LoadMoreButton'

function Home() {
    const [movies, setMovies] = useState<MovieCardType[]>([])
    const [page, setPage] = useState<number>(1)
    
    const fetchTopRated = async (page: number) => {
        try {
            const response = await baseApi.get(`/3/movie/top_rated?language=en-US&page=${page}`)
            setMovies(prev => [...prev, ...response.data.results])
        }
        catch(err){
            console.log("Fetch Error in homepage top rated movies", err)
        }
    }

    useEffect(() => {
        fetchTopRated(page)
    }, [page])

    const handlePageUpdate = () => {
        setPage(prev => prev + 1)
    }

    return (
        <div className="w-[90%] mx-auto mb-44">
            <HomeSlider />
            <MovieList movies={movies} />
            <div onClick={()=> handlePageUpdate()}>
                <LoadMoreButton />
            </div>
        </div>
    )
}

export default Home
