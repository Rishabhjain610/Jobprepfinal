import React from 'react'

import { DotLottieReact } from '@lottiefiles/dotlottie-react';



const Content = () => {
  return (
    <div className="bg-black flex flex-wrap items-center justify-between px-9  text-white">
  {/* Text Section */}
  <div className="w-full md:w-1/2 text-center md:text-left relative -top-10 left-5">
    <h1 className="text-[#9333ea] text-5xl md:text-8xl font-bold leading-tight">
      Get your dream Job today
    </h1>
    <h2 className='text-white text-2xl md:text-4xl font-bold leading-tight mt-5 '>with Job Prep.</h2>
    <button className="relative ml-[272px] w-[9.5em] h-[2.9em] border-[#9333ea] border-2 rounded-[11px] text-white text-right hover:bg-[#9333ea] transition-all duration-600 mt-8 flex items-center justify-between px-3 ">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 transition-all duration-600 hover:translate-x-[5px]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
  </svg>
  <div className="">Get started</div>
</button>

  </div>

  {/* Animation Section */}
  <div className="w-full md:w-1/2 flex justify-center items-center h-[500px] md:h-[600px]">
    <div className="w-[100%] md:w-[1000px] h-auto">
      <DotLottieReact
        src="https://lottie.host/0d17f440-ddeb-46f2-9db6-80748c5a47b7/CH5PMEQZkP.lottie"
        loop
        autoplay
      />
    </div>
  </div>
</div>


  
  )
}

export default Content
