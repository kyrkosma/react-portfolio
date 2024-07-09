import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-white'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full mx-auto px-10 grid sm:grid-cols-2'>
                    <div className='p-4 md:text-right'>
                        <p className='text-4xl font-bold inline border-b-4 border-emerald-500'>About</p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full mx-auto px-10 grid sm:grid-cols-2'>
                    <p className='text-xl font-bold px-4 py-2 sm:py-4 sm:text-4xl md:text-right '>Hi, I'm Marios. <br/> Nice to meet you. <br/> Please take a look around.</p>
                    <div className='px-4 py-2 sm:py-4 sm:text-2xl'>As a Software Engineer over the past years, I have contributed to high-impact projects for leading financial institutions.
                        My expertise lies primarily in Java, though I have also gained experience with a diverse range of technologies and
                        tools. My passion for technology and continuous improvement fuels my dedication to staying abreast of emerging
                        trends and best practices. Enthusiastic about software architecture, I am eager to apply my technical knowledge and
                        problem-solving skills to design and implement solutions that align with business objectives.</div>
                </div>


            </div>
        </div>
    )
}

export default About;