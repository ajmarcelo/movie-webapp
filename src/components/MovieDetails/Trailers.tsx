import React, { useEffect, useState } from 'react'
import { baseApi } from '../../api/AxiosInstance'
import YouTube from 'react-youtube' // npm install react-youtube

function Trailers({movieId}: { movieId: string }) {

    const [trailers, setTrailers] = useState<{key:string, name: string}[]>([])

    const fetchTrailers = async () => {
        try{
            const response = await baseApi.get(`/3/movie/${movieId}/videos?language=en-US`)
            // console.log(response.data.results)
            const trailerObj = response.data.results.filter((data:{type:string}) => data.type=="Trailer")
            setTrailers(trailerObj)
        }
        catch(err){
            console.log("Fetch trailer error", err)
        }
    }

    useEffect(() => {
        fetchTrailers()
    }, [])
    
    const opts ={
        height: '200',
        width: '380'
    }

    return (
        <div className='mx-16'>
            {trailers.length > 0 &&
                <div className='mt-8'>
                    <h1 className='text-3xl text-yellow-500 font-bold'>Watch Trailers</h1>
                    <div className='flex flex-wrap gap-4'>
                        {
                            trailers.map((link, ind) =>
                                <div key={ind} className='flex flex-col gap-2 mt-4'>
                                    <YouTube videoId={link.key} opts={opts}/>
                                    <h1 className='text-xl w-[380px]'>{link.name}</h1>
                                </div>
                            )
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Trailers