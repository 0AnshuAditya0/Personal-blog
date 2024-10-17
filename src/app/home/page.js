import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen bg-indigo-950 flex justify-start items-centre">
        <div className="m-auto p-14">
          <div className=" rounded-xl overflow-hidden">
            <Image
              src="/images/hyunjin.jpg"
              alt=""
              height={2000}
              width={2000}
            />
          </div>
        </div>
        <p className="m-auto p-40 text-lime-200">
          The future of AI-powered "eyes" holds the promise of enhanced vision
          systems that can process and interpret visual data far beyond human
          capabilities. These systems could revolutionize industries such as
          healthcare, autonomous vehicles, surveillance, and robotics by
          providing real-time analysis and decision-making. AI eyes could aid in
          early disease detection, enable safer self-driving cars, and even
          allow machines to interact more intuitively with their environments.
          As technology advances, the combination of AI and visual sensors will
          likely reshape how we perceive and interact with the world.
        </p>
      </div>
      <br></br>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
        
        <h1 className="text-4xl font-bold mb-10 text-center">
          Welcome to the Grid Layout
        </h1>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
     
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="/images/sample1.jpg"
              alt="Sample Image 1"
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">Box 1</h2>
            <p className="text-gray-600">Sample content goes here.</p>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="/images/sample2.jpg"
              alt="Sample Image 2"
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">Box 2</h2>
            <p className="text-gray-600">Sample content goes here.</p>
          </div>

         
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="/images/sample3.jpg"
              alt="Sample Image 3"
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">Box 3</h2>
            <p className="text-gray-600">Sample content goes here.</p>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="/images/sample4.jpg"
              alt="Sample Image 4"
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">Box 4</h2>
            <p className="text-gray-600">Sample content goes here.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
