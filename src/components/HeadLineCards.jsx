import React from 'react'

export const HeadLineCards = () => {
  return (
    <div className='max-w-[1640px] max-auto p-4 py-12 grid  md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative '>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGOS's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img 
            src="https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="typeburger"
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl '
            />
        </div>
                {/* Card */}
                <div className='rounded-xl relative '>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Chese burger</p>
                <p className='px-2'>Added daily</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img 
            src="https://images.pexels.com/photos/660282/pexels-photo-660282.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Chese burger"
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl '
            />
        </div>
                {/* Card */}
                <div className='rounded-xl relative '>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Black burger</p>
                <p className='px-2'>Through 10/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img 
            src="https://images.pexels.com/photos/179833/pexels-photo-179833.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="typeburger"
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl '
            />
        </div>
    </div>
  )
}
