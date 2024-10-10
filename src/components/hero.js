import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div
    className=" w-full h-screen bg-violet-300"
    >
      <Image 
      src="/images/hyunjin.jpg"
      height={30}
      width={400}
      className='p-4 ml-24'
      />
    </div>
  )
}

export default Hero