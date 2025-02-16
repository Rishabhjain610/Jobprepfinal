import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";
import Pagination from "../components/Pagination";
import Skeleton from "../components/HomeSkeleton";
import Navbar from '../components/landingage/Navbar';
import Footer from '../components/landingage/Footer';

const Job_main = ({ searchParams }) => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError(null); // Reset error state before new API call

      try {
        const response = await axios.get("https://jsearch.p.rapidapi.com/search", {
          params: {
            query: `${searchParams.jobTitle || "developer"} in ${searchParams.location || "anywhere"
              }`,
            date_posted: searchParams.datePosted || "all",
            page: currentPage,
          },
          headers: {
            "X-RapidAPI-Key": "1d625a00e6msh9523d4e83fe1b82p176cadjsn060f3d518945", // Replace with your API key
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
          },
        });

        if (response.data && response.data.data) {
          setJobs(response.data.data);
        } else {
          throw new Error("Unexpected API response format.");
        }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 429) {
            setError("Rate limit exceeded. Please wait and try again later.");
          } else if (error.response.status === 403) {
            setError("Access forbidden. Please check your API key and permissions.");
          } else {
            setError(`Error fetching jobs: ${error.response.data.message || "Unknown error."}`);
          }
        } else {
          setError("Network or configuration error. Please check your connection.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [searchParams, currentPage]);

  return (
    <>
      <Navbar />
      <div className="mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {loading ? (
            Array.from({ length: 8 }, (_, index) => <Skeleton key={index} />)
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : jobs.length > 0 ? (
            jobs.map((job) => <JobCard key={job.job_id} job={job} />)
          ) : (
            <p>No jobs found</p>
          )}
        </div>
        <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>
      <Footer/>
    </>
  );
};

export default Job_main;



