import React, { useEffect, useState } from 'react'
import HomeSlider from '../../components/Home/HomeSlider'
import { baseApi } from '../../api/AxiosInstance'

function Home() {
    const [movies,setMovies] = useState([])

    const fetchMovies = async () => {
        try {
            const response = await baseApi.get(`/3/movie/top_rated?language=en-US&page=1`)
            setMovies(response.data.results)
        }
        catch(err){
            console.log("Fetch Error in homepage top rated movies", err)
        }
    }

    useEffect( () => {
        fetchMovies()
    }, [])

    return (
    <div className="w-[90%] mx-auto">
        <HomeSlider />
    </div>
    )
}

export default Home
