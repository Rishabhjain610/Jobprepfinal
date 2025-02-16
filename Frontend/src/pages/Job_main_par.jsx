import { useEffect, useState } from "react";
import Navbar2 from "../components/Navbar";
import Navbar1 from "../components/landingage/Navbar";
import Job_main from "./Job_main"; 
import Footer from '../components/landingage/Footer';

const Job_main_par = () => {
    const [jobTitle, setjobTitle] = useState("");
    const [location, setlocation] = useState("");
    const [datePosted, setdatePosted] = useState("");
    const searchParams = { jobTitle, location, datePosted };
    return(
        <>
            <Navbar1/>
            {/* <Navbar2
            jobTitle={jobTitle}
            location={location}
            datePosted={datePosted}
            setJobTitle={setjobTitle}
            setLocation={setlocation}
            setDatePosted={setdatePosted}
            /> */}
            <Job_main/>
            <Footer/>
        </>



    )

}

export default Job_main_par;