import React from 'react'
import heroImage from "../../public/heroImage.jpg"
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='relative h-screen'>
        <div className='absolute -z-10 inset-0'>
        <Image 
        src={heroImage}
        alt='img'
        fill
        style={{objectFit:"cover"}}
    />
    </div>
        <div>
            <h1 className='flex justify-center pt-30 font-bold text-6xl p-5'>Welcome !</h1>
        </div>
    </div>
  )
}

export default Hero