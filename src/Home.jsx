import React, {useEffect, useState} from 'react';
import HeroSection from "./component/HeroSection.jsx";
import JobCategoryList from "./component/JobCategoryList.jsx";
import FeaturedJobsSection from "./component/FeaturedJobsSection.jsx";
import {useLoaderData} from "react-router-dom";

const Home = () => {
    const [jobData, setJobData] = useState([]);
    const[showAll, setShowAll] = useState(false);
    const {jobPostings} = useLoaderData();
    useEffect(() => {
        if(showAll === false)
        {
            const few =jobPostings?.slice(0,4);
            setJobData(few);
        }else {
            setJobData(jobPostings);
        }

    }, [showAll]);

    const viewAllJob = () => {
        setShowAll(true);
    };

    const viewLessJob = () => {
        setShowAll(false);
    };


    return (
        <div>
            <HeroSection></HeroSection>
            <JobCategoryList></JobCategoryList>
            <FeaturedJobsSection jobData={jobData} viewAllJob={viewAllJob} viewLessJob={viewLessJob} showAll={showAll}></FeaturedJobsSection>
        </div>
    );
};

export default Home;