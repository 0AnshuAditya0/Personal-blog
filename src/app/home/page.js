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
      <br className="bg-black"></br>
      <div className="w-full h-screen bg-indigo-950">yo</div>
    </>
  );
};

export default Home;
