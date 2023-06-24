import React from 'react'

export const Hero = () => {
  return (
    <div className='max-width-[1640px] mx-auto p-4'>
      <div className='max-width-[1640px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>the <span className='text-orange-500'>Best</span></h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Foods</span>Delivered</h1>
        </div>
        <img className="w-full max-h-[500px] object-cover"src="https://images.pexels.com/photos/103886/pexels-photo-103886.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/"/>
      </div>
    </div>
  )
}
