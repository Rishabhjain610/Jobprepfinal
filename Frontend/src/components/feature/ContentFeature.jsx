import React from 'react';
import { NavLink } from 'react-router-dom';
import aichatbot from '../../assets/aichatbot.jpeg';
import resume from '../../assets/resume.jpeg';
import liveinterview from '../../assets/liveinterview.jpg';
import jobfind from '../../assets/jobfind.png';

const ContentFeature = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-8 bg-black min-h-screen">
      {/* Feature Cards */}
      
      <NavLink to="/chatbot" className="w-full sm:w-80 md:w-96 lg:w-1/4 h-64 bg-black text-white text-center rounded-lg shadow-lg shadow-[#9333ea] hover:translate-y-[-5px] transition-all duration-300 flex flex-col items-center justify-center p-6">
        <img src={aichatbot} alt="AI Chatbot" className="mb-4 rounded-lg h-32 object-cover" />
        <span className="text-xl font-semibold">AI Chatbot</span>
      </NavLink>

      <NavLink to="/resume" className="w-full sm:w-80 md:w-96 lg:w-1/4 h-64 bg-black text-white text-center rounded-lg shadow-lg shadow-[#9333ea] hover:translate-y-[-5px] transition-all duration-300 flex flex-col items-center justify-center p-6">
        <img src={resume} alt="AI Resume Maker" className="mb-4 rounded-lg h-32 object-cover" />
        <span className="text-xl font-semibold">AI Resume Maker</span>
      </NavLink>

      <NavLink to="/live-interview" className="w-full sm:w-80 md:w-96 lg:w-1/4 h-64 bg-black text-white text-center rounded-lg shadow-lg shadow-[#9333ea] hover:translate-y-[-5px] transition-all duration-300 flex flex-col items-center justify-center p-6">
        <img src={liveinterview} alt="Live Interview" className="mb-4 rounded-lg h-32 object-cover" />
        <span className="text-xl font-semibold">Live Interview</span>
      </NavLink>

      <NavLink to="/job" className="w-full sm:w-80 md:w-96 lg:w-1/4 h-64 bg-black text-white text-center rounded-lg shadow-lg shadow-[#9333ea] hover:translate-y-[-5px] transition-all duration-300 flex flex-col items-center justify-center p-6">
        <img src={jobfind} alt="Job Find" className="mb-4 rounded-lg h-32 object-cover" />
        <span className="text-xl font-semibold">Job Find</span>
      </NavLink>
    </div>
  );
};

export default ContentFeature;

