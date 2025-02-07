function CarouselMiniCardSkeleton() {
  return (
    <div className='col-xl-12 col'>
        <div className="flex gap-2 placeholder-glow">
                <div className='w-[100px] aspect-[4/6] placeholder'></div>
                <div className="flex flex-col justify-between py-2">
                    {/* Title and Overview */}
                    <div className="leading-5 w-[200px]">
                        <h1 className='w-[40%] placeholder'></h1>
                        <h1 className="text-md w-[100%] placeholder"></h1>
                        <h1 className="text-md w-[95%] placeholder"></h1>
                        <h1 className="text-md w-[30%] placeholder"></h1>
                    </div>
                    {/* Vote count area */}
                    <div className="flex gap-1 text-center w-[20%] placeholder"></div>
                </div>
        </div>
    </div>
  )
}

export default CarouselMiniCardSkeleton