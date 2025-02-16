import React from 'react';
import aboutus from '../../assets/aboutus.png';

const ContentAbout = () => {
  return (
    <div className="flex bg-black text-[#9333ea] p-10 space-x-8">
      {/* Left Section - About Text */}
      <div className="flex-1">
        <h2 className="text-5xl font-extrabold text-white mb-6">About</h2>
        <p className="text-3xl text-white mb-6 p-6 border-4 border-[#9333ea] rounded-lg shadow-lg">
          Job Prep is a platform designed to help users prepare for job interviews. It offers a range of tools including a chatbot for mock interviews, video calls for real-time practice, and a resume maker to help you craft professional resumes. The platform provides personalized feedback to boost confidence and ensures users are well-prepared to present themselves effectively to potential employers.
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="flex-none">
        <img src={aboutus} alt="About Job Prep" className="w-[80%] h-auto rounded-lg shadow-lg ml-auto" />
      </div>
    </div>
  );
};

export default ContentAbout;
