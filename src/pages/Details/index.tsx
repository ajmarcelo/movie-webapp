import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseApi } from '../../api/AxiosInstance'
import { imagepath, MovieDetailType } from '../../utils/constant'
import Trailers from '../../components/MovieDetails/Trailers'
import SimilarMovies from '../../components/MovieDetails/SimilarMovies'

function Details() {

    const [details, setDetails] = useState<MovieDetailType>()
    const params = useParams() // gets the movie id from the route
    console.log(params)

    const fetchDetails = async () => {
        try{
            const response = await baseApi.get(`/3/movie/${params.id}?language=en-US`)
            console.log(response.data)
            setDetails(response.data)
        } 
        catch(err) {
            console.log("Fetch Details error", err)
        }
    }
    useEffect(() => {
        fetchDetails()
    }, [params])
    
    return (
    <div>
        {details && params.id &&
            <div className='relative h-fit w-full'>
                <div className='relative'>
                    <img src={imagepath+details.backdrop_path}
                        className='opacity-40 w-full aspect-[7/4] object-center'
                        alt='background'/>
                        <div className="absolute bottom-0 w-full h-full _carouselGradient"></div>
                </div>
                <div className='absolute top-0 w-full pb-[100px]'>
                    <div className='w-[90%] mx-auto mt-[500px]'>
                        <div className='flex gap-8'>
                            <img src={imagepath+details?.poster_path} 
                                className='w-[350px] h-fit'
                                alt=""/>
                            <div className=''>
                                <h1 className='text-5xl'>{details?.original_title}
                                    <span className='mx-3 text-4xl'>{details?.release_date.substring(0,4)}</span>
                                </h1>
                                <div className='text-xl text-slate-300 mt-2'>
                                    <h2>{details?.tagline}</h2>
                                    <h2 className='mt-3'>{details?.overview}</h2>
                                    <div className='flex flex-col  gap-3 mt-4 text-zinc-300'>
                                        <h2>
                                            Genres: {details?.genres?.map(genre=>genre.name).join(", ")}
                                        </h2>
                                        <h2>Ratings: {String(details?.vote_average).substring(0,3)}</h2>
                                        <h2>Language: {details?.original_language}</h2>
                                        <h2>Release Date: {details?.release_date}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Trailers movieId={params.id}/>
                    <SimilarMovies movieId={params.id}/>
                </div>
            </div>
        }
    </div>
    )
}

export default Details


