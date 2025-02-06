import React, { useEffect, useState } from 'react'
import { Category, MovieCardType } from '../../utils/constant'
import { baseApi } from '../../api/AxiosInstance'
import MovieList from '../../components/Home/MovieList'
import LoadMoreButton from '../../components/Button/LoadMoreButton'

interface pageType {
    [key:string]: number
}

function Movies() {

    const [filter, setFilter] = useState(Category[0].name)
    const [nowPlaying, setNowPlaying] = useState<MovieCardType[]>([])
    const [popular, setPopular] = useState<MovieCardType[]>([])
    const [topRated, setTopRated] = useState<MovieCardType[]>([])
    const [upcoming, setUpcoming] = useState<MovieCardType[]>([])
    const [pages, setPages] = useState<pageType>({"now_playing":1, 
                                        "popular":1,
                                        "top_rated":1,
                                        "upcoming":1})

    const toggleSelection = (item: string) => {
        setFilter(item)
    }

    const fetchMovies = async (path:string, page:number) => {
        console.log(page)
        try {
            const response = await baseApi.get(`/3/movie/${path}?language=en-US&page=${page}`)
            switch (path) {
                case "now_playing":
                    setNowPlaying(prev => [...prev, ...response.data.results])
                    break;
                case "popular":
                    setPopular(prev => [...prev, ...response.data.results])
                    break;
                case "top_rated":
                    setTopRated(prev => [...prev, ...response.data.results])
                    break;
                case "upcoming":
                    setUpcoming(prev => [...prev, ...response.data.results])
                    break;
                default:
                    break;
            }
        } 
        catch(err) {
            console.log("Fetch error in Movies page", err)
        }
    }

    const handleLoadMore = () => {
        const currentCategory = Category.find(item => item.name == filter)
        if(currentCategory){
            setPages(prev => ({
                ...prev,[currentCategory.path]:prev[currentCategory.path] + 1
            }))
            fetchMovies(currentCategory.path, pages[currentCategory.path] + 1)
        }
    }

    useEffect(() => {
        const current = Category.filter(item => item.name === filter)
        console.log(current)
        fetchMovies(current[0].path,1)
    }, [filter])
    
    return (
        <div className='w-[90%] mx-auto mt-4'>
            <h1 className='text-3xl font-bold text-yellow-500'>Explore Movies</h1>
            <div className='flex mt-2'>
                {
                    Category.map((item, ind) => (
                        <div key={ind} className=''>
                            <button 
                                onClick={()=>toggleSelection(item.name)}
                                className='text-base font-semibold w-44 h-10 hover:bg-[#121212]'>{item.name}</button>
                            <div className={`h-0.5 bg-blue-400 mx-auto ${filter == item.name ? "w-full" : "w-0"} duration-500`}></div>
                        </div>
                    ))
                }
            </div>
            {filter == "Now Playing" && <MovieList movies={nowPlaying}/>}
            {filter == "Popular" && <MovieList movies={popular}/>}
            {filter == "Top Rated" && <MovieList movies={topRated}/>}
            {filter == "Upcoming" && <MovieList movies={upcoming}/>}

            <div onClick={()=>{handleLoadMore()}}>
                <LoadMoreButton />
            </div>
        </div>
    )
}

export default Movies
