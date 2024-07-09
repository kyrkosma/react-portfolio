import React from 'react';
import Java from '../assets/experience/java.png'
import SpringBoot from '../assets/experience/springboot.png'
import Git from '../assets/experience/git.png'
import Maven from '../assets/experience/maven.png'
import Html from '../assets/experience/html.png'
import Css from '../assets/experience/css.png'
import Javascript from '../assets/experience/javascript.png'
import ReactL from '../assets/experience/react.png'

const Experience = () => {
    return (
        <div name="experience" className='w-full h-screen bg-[#0a192f] text-white'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-emerald-500'>Experience</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-7 text-center py-8'>
                    <div className='shadow-md shadow-emerald-500 hover:scale-110 duration-500'>
                        <img className='h-16 sm:h-20 mt-2 mx-auto' src={Java} alt='java-logo'/>
                        <p className='my-2 sm:my-4'>Java</p>
                    </div>
                    <div className='shadow-md shadow-emerald-500 hover:scale-110 duration-500'>
                        <img className='h-16 sm:h-20 mt-2 mx-auto' src={SpringBoot} alt='springboot-logo'/>
                        <p className='my-2 sm:my-4'>Spring Boot</p>
                    </div>
                    <div className='shadow-md shadow-emerald-500 hover:scale-110 duration-500'>
                        <img className='h-16 sm:h-20 mt-2 mx-auto' src={Git} alt='git-logo'/>
                        <p className='my-2 sm:my-4'>Git</p>
                    </div>
                    <div className='shadow-md shadow-emerald-500 hover:scale-110 duration-500'>
                        <img className='h-16 sm:h-20 mt-2 mx-auto' src={Maven} alt='springboot-logo'/>
                        <p className='my-2 sm:my-4'>Maven</p>
                    </div>

                    <div className='shadow-md shadow-emerald-500 hover:scale-110 duration-500'>
                        <img className='h-16 sm:h-20 mt-2 mx-auto' src={Html} alt='java-logo'/>
                        <p className='my-2 sm:my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-emerald-500 hover:scale-110 duration-500'>
                        <img className='h-16 sm:h-20 mt-2 mx-auto' src={Css} alt='springboot-logo'/>
                        <p className='my-2 sm:my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-emerald-500 hover:scale-110 duration-500'>
                        <img className='h-16 sm:h-20 mt-2 mx-auto' src={Javascript} alt='git-logo'/>
                        <p className='my-2 sm:my-4'>Javascript</p>
                    </div>
                    <div className='shadow-md shadow-emerald-500 hover:scale-110 duration-500'>
                        <img className='h-16 sm:h-20 mt-2 mx-auto' src={ReactL} alt='springboot-logo'/>
                        <p className='my-2 sm:my-4'>React</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Experience;