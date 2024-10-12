import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <div
      className=" w-full h-screen bg-violet-300 flex justify-start items-centre"
    >
      <Image
        src="/images/hyunjin.jpg"
        alt=""
        height={303}
        width={500}
        className='ml-9 rounded-xl'
      />
      <p className="m-10 p-40">
      The future of AI-powered "eyes" holds the promise of enhanced vision systems that can process and interpret visual data far beyond human capabilities. These systems could revolutionize industries such as healthcare, autonomous vehicles, surveillance, and robotics by providing real-time analysis and decision-making. AI eyes could aid in early disease detection, enable safer self-driving cars, and even allow machines to interact more intuitively with their environments. As technology advances, the combination of AI and visual sensors will likely reshape how we perceive and interact with the world.
      </p>
    </div>

  )
}

export default Home