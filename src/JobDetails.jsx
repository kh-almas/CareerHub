import React from 'react';
import Header from "./component/Header.jsx";
import JobDetailsComponent from "./component/JobDetailsComponent.jsx";
import WebpageTitle from "./component/WebpageTitle.jsx";

const JobDetails = () => {
    return (
        <>
            <Header></Header>
            <WebpageTitle title="Job Details" backgroundImage="https://www.feednh.org/wp-content/uploads/2014/04/page-title-background.jpg"></WebpageTitle>
            <JobDetailsComponent></JobDetailsComponent>
        </>
    );
};

export default JobDetails;