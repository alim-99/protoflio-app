import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className='py-16'>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7'>
        <h1 
        className='text-[#BFBFBF] text-4xl lg:leading-normal mb-3 sm:text-5xl lg:text-7xl font-extrabold'>
          Hello, I'm Ali
          </h1>
        <p className='text-[#dddd] text-base mb-6 sm:text-lg lg:text-xl'>
        I'm a Front End Developer,
        i have two years of exprience
        in building web apps, and i'm 
        ready to work with others to make
        modern websites.
        </p>
        <div>
          <Link href="/#contact">
          <button className="cursor-pointer transition-all mr-4 bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
            Hire Me
          </button>
          </Link>
          <Link href="https://github.com/alim-99/alim-99">
          <button className="cursor-pointer transition-all mr-4 mt-3 bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
            Github Readme
          </button>
          </Link>
        </div>
      </div>
      <div className="rounded-full lg:ml-10 m-auto lg:-top-3 top-10 text-center bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              src="/images/hero.jpg"
              alt="hero image"
              className="absolute inline rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
      </div>
    </section>
  )
}

export default HeroSection
