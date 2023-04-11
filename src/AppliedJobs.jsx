import React from 'react';
import Header from "./component/Header.jsx";
import WebpageTitle from "./component/WebpageTitle.jsx";
import AppliedJobsComponent from "./component/AppliedJobsComponent.jsx";

const AppliedJobs = () => {
    return (
        <>
            <Header></Header>
            <WebpageTitle title="Job Details" backgroundImage="https://www.feednh.org/wp-content/uploads/2014/04/page-title-background.jpg"></WebpageTitle>
            <AppliedJobsComponent></AppliedJobsComponent>
        </>
    );
};

export default AppliedJobs;