import { useState } from "react";
import { useParams } from "react-router-dom";
import FormSection from "../../component/FormSection";
import ResumePreview from "../../component/ResumePreview";
import { ResumeContext } from "../../../../context/ResumeContext";
import Navbar from '../../../../components/landingage/Navbar';
import Footer from '../../../../components/landingage/Footer';

const EditResume = () => {
  // Hardcoding the resume info for demonstration
  const resumeData = {
    personalInfo: {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      phone: "+1234567890",
      address: "123 Main St, City, Country",
    },
    experience: [
      {
        company: "Company A",
        position: "Software Developer",
        startDate: "2020-01-01",
        endDate: "2022-01-01",
        description: "Worked on various software projects."
      },
      {
        company: "Company B",
        position: "Senior Developer",
        startDate: "2022-02-01",
        endDate: "Present",
        description: "Leading a team of developers."
      }
    ],
    education: [
      {
        school: "XYZ University",
        degree: "Bachelor of Science in Computer Science",
        startDate: "2016-01-01",
        endDate: "2020-01-01"
      }
    ],
  };

  // const { email, resumeId } = useParams(); // Still using URL params
  const [resumeInfo, setResumeInfo] = useState(resumeData); // Set the state with hardcoded data

  return (
    <ResumeContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10 mt-[100px]">
        <FormSection />
        <ResumePreview />
      </div>
      <Footer />
    </ResumeContext.Provider>
  );
};

export default EditResume;
