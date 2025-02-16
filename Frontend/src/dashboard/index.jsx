import AddResume from "./components/AddResume";
import { useState } from "react";
// import ResumeItem from "./components/ResumeItem";
// import Header from "@/components/custom/Header";
import Navbar from '../components/landingage/Navbar';
import Footer from '../components/landingage/Footer';

const Dashboard = () => {
  // Hardcoded list of resumes
  const [resumeList, setResumeList] = useState([
    { id: "resume-1", title: "Software Engineer Resume" },
    { id: "resume-2", title: "Full Stack Developer Resume" },
  ]);
  const [loading, setLoading] = useState(false);

  const getResumesList = () => {
    setLoading(true);
    // Simulate fetching resumes (mock behavior)
    setTimeout(() => {
      //("Resumes loaded!");
      setLoading(false);
    }, 500); // Simulated delay
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen flex flex-col">
        {/* <Header /> */}

        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-10 md:px-20 lg:px-32 bg-white shadow-lg rounded-lg">
            <h1 className="font-bold text-4xl text-gray-800">My Resume</h1>
            <p className="text-gray-600 mt-2 text-lg">
              Start Creating AI Resume for your next job role
            </p>
            <div className=" mt-7">
              <AddResume />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
