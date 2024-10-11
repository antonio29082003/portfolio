import React from 'react';
import aboutImg from '../assets/about.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>

        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='txet-4xl font-bold mb-4 primary-color'>About me</h2>
                    <p className='text-base lg:text-lg'>
                    I'm a coding's and tech's lover, I like designing and coding Application of any type.
                    I studied HTML, CSS, Javascript, PHP, Git, SQL and MYSQL, Tailwind and React.
                    I love always being in a learning mood, and I found really interesting every way I can use the language learnt.
                    </p>
                </div>
            </div>

            <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} width={300} height={300} />

        </div>

    </div>
  )
}

export default About