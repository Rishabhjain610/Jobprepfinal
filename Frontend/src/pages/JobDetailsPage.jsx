import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import JobSkeleton from '../components/JobdetailsSkeleton'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from '../components/landingage/Navbar';
import Footer from '../components/landingage/Footer';

const JobDetailsPage = () => { 
  const { id } = useParams(); 
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const [job, setJob] = useState(null); 

  useEffect(() => { 
    const fetchJobDetails = async () => { 
      try { 
        const response = await axios.get('https://jsearch.p.rapidapi.com/job-details', { 
          params: { job_id: id }, 
          headers: { 
            'X-RapidAPI-Key': "1d625a00e6msh9523d4e83fe1b82p176cadjsn060f3d518945", 
            'X-RapidAPI-Host': "jsearch.p.rapidapi.com", 
          },
        });

        setJob(response?.data?.data?.[0]); 

      } catch (error) { 

        console.error('Error fetching job details:', error); 

      }
    };
    fetchJobDetails(); 
  }, [id]); 
  if (!job) return <JobSkeleton/>; 
  const jobDescriptionLines = job.job_description.split('\n').map((line, index) => ( 
    <p key={index} className="mb-2">{line}</p> 
  ));

  return (
    <> 
    <Navbar/>
    <div className="container mx-auto mt-16 p-8"> 
      <button 
        className="bg-purple-500 text-white p-2 rounded mb-4 px-4 flex shadow-md"
        onClick={() => navigate(location.state?.currentPage ? `/page/${location.state.currentPage}` : '/job')} 
      >
        <FaArrowLeft className='mt-[3px] pr-2 text-xl'/>Back 
      </button>
      <div className="bg-white p-6 rounded"> 
        <h1 className="text-2xl font-bold mb-4 text-gray-700 job-title">{job.job_title}</h1> 
        <p className="mb-2 text-gray-700 card-detail">Employer: {job.employer_name}</p> 
        <p className="mb-2 text-gray-700 card-detail">Location: {job.job_city}, {job.job_state}</p> 
        <p className="mb-2 text-gray-700 card-detail">Type: {job.job_employment_type}</p> 
        <p className="mb-4 text-gray-700 card-detail">Posted on: {new Date(job.job_posted_at_datetime_utc).toLocaleDateString()}</p> 
        <h3 className="text-lg  mb-2 text-gray-700 card-details">Job Description:</h3> 
        <p className='card-detail text-sm'>{jobDescriptionLines}</p> 
      </div>
    </div>
    <a
     href={job.job_apply_link} 
     className="bg-purple-500 text-white px-4 rounded ml-8 flex mb-8 w-32 cursor-pointer hover:bg-blue-300 card-detail shadow-md"
     target="_blank" 
     rel="noopener noreferrer" 
   >
     Apply Now<FaArrowRight className='mt-[14px] text-xl'/> 
   </a>
   <Footer/>
   </>
  );
};

export default JobDetailsPage