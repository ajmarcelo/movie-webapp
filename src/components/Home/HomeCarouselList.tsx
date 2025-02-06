import { useState } from "react"
import { CarouselMovieType, imagepath } from "../../utils/constant"
import { FiThumbsUp } from "react-icons/fi"
import { Link } from "react-router-dom"

interface HomeCarouselListProps {
    next: number[],
    carouselMovies: CarouselMovieType[]
}

function HomeCarouselList({ next, carouselMovies }: HomeCarouselListProps) {
    
    const [hover, setHover] = useState<number | null>(null)
    
    return (
    <div>
        <h1 className='font-bold text-xl text-yellow-500'>Up Next</h1>
        {
            next.map((item, ind) => (
                <Link to={`/details/${carouselMovies[item].id}`}>
                    <div key={ind} className="flex gap-2"
                        onMouseEnter={()=> setHover(ind)}
                        onMouseLeave={() => setHover(null)}>
                            <img src={imagepath + carouselMovies[item]?.poster_path} 
                                className='w-[100px]' alt="" />
                            <div className="flex flex-col justify-between py-2">
                                {/* Title and Overview */}
                                <div className="leading-5">
                                        <h1 className={`${hover === ind? "underline" : ""}`}>{carouselMovies[item]?.title}</h1>
                                        <h1 className="text-md text-zinc-300 line-clamp-3">{carouselMovies[item]?.overview}</h1>
                                    </div>
                                    
                                    {/* Vote count area */}
                                    <div className="flex gap-1 text-center">
                                        <FiThumbsUp/>
                                        <h2>{carouselMovies[item]?.vote_count}</h2>
                                    </div>
                            </div>
                    </div>
                </Link>
            ))
        }
    </div>
    )
}

export default HomeCarouselList