import React, { useEffect, useState } from 'react'
import { imagepath, MovieCardType } from '../../utils/constant'

interface MovieCardProps {
    movieData: MovieCardType
}

const MovieCard = ({ movieData }:  MovieCardProps)  => {

    const [hover, setHover] = useState<number | null>(null)

    // Comment out this useEffect to check the changes in hover
    // useEffect(() => {
    //   console.log("hover item: ", hover)
    
    // }, [hover])
    
    return (
        <div className='col' 
            onMouseEnter={()=> setHover(movieData.id)}
            onMouseLeave={()=> setHover(null)}
        >
            <div className={`my-3 border-2 border-zinc-800 rounded-lg overflow-hidden 
                            ${movieData.id === hover ? "scale-[102%]": ""} 
                            duration-200`}>
                <div className='relative overflow-hidden'>
                    <img src={imagepath + movieData.poster_path} alt=""/>
                    <div className='absolute -bottom-6 w-full h-28 _carouselGradient'></div>
                </div>

                <div className='bg-[#222] p-2'>
                    <h1 className={`text-[17px] font-semibold line-clamp-1
                                    ${movieData.id === hover ? "underline" : ""}`}>{movieData.title}</h1>
                    <div className='text-[15px] text-zinc-300 mt-2'>
                        <h1 className=''>Rating: {String(movieData.vote_average).substring(0,3)}</h1>
                        <h1 className=''>Language: {movieData.original_language}</h1>
                        <h1 className=''>Release Date: {movieData.release_date}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard