import React from 'react';
import {HiArrowNarrowRight} from "react-icons/hi";

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto px-10 flex flex-col justify-center h-full'>
                <p className='text-xl sm:text-3xl text-emerald-500 font-bold'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-white my-1'>Marios Kyrkos</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-gray-300'>I'm a Software Engineer.</h2>
                <div>
                    <button className='flex items-center border-2 px-4 py-2 my-3 text-white bold hover:bg-emerald-500 duration-500 hover:border-emerald-500'>
                        View Work <HiArrowNarrowRight className='ml-3'/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;