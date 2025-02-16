import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Job_main from './pages/Job_main';
import JobDetailsPage from './pages/JobDetailsPage';
import Chatbot from './pages/Chatbot';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Navbar from './components/landingage/Navbar';
import Footer from './components/landingage/Footer';
import Dashboard from "./dashboard/index.jsx";
import ViewResume from "./my-resume/view/index.jsx";
import EditResume from "./dashboard/resume/[resumeId]/edit/index.jsx";
import Home from "./components/landingage/Home"; // Correct the path if needed
import About from "./components/about/About";
import Contact from "./components/contact/contact";
import Feature from "./components/Feature/Feature";

import './App.css'


function App() {
  const [searchParams, setSearchParams] = useState({ jobTitle: 'developer', location: '', datePosted: 'all' });
  const handleSearch = (params, navigate) => {
    setSearchParams(params);
    navigate('/jobs');
  };

  return (
    <>
      <Router>
        {/* <Navbar />  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Feature />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/job" element={<Job_main searchParams={searchParams} />} />
          <Route path="/job/:id" element={<JobDetailsPage />} />
          <Route path="/resume" element={<Dashboard />} />
          <Route path="/resume/edit" element={<EditResume />} />
          <Route path="/resume/:email/:resumeId/view" element={<ViewResume />} />
          {/* <Route path="/chatbot" element={<Chatbot />} />  */}
          {/* <Route path="/features" element={< />} /> */}
        </Routes>
        {/* <Footer/> */}

      </Router>
    </>
  )
}

export default App
