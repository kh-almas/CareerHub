import React, {useEffect, useState} from 'react';
import WebpageTitle from "./component/WebpageTitle.jsx";
import AppliedJobsComponent from "./component/AppliedJobsComponent.jsx";
import {useLoaderData} from "react-router-dom";

const AppliedJobs = () => {
    const {data, setData} = useState([]);
    let dataStorage = [];
    const [applied, setApplied] = useState([]);
    const { jobPostings } = useLoaderData();
    useEffect(() => {
        const storeData = JSON.parse(localStorage.getItem('applied-job'));
        storeData?.map(id => {
            // console.log(id);
            const findData = jobPostings?.find(data => parseInt(id) === parseInt(data.id));
            // const findApplyData = [...applied, findData];

            setData(data.push(findData));
        })

        // console.log(dataStorage);

    }, []);
    // console.log(applied);

    return (
        <>
            <WebpageTitle title="Job Details" backgroundImage="https://www.feednh.org/wp-content/uploads/2014/04/page-title-background.jpg"></WebpageTitle>

            <AppliedJobsComponent></AppliedJobsComponent>
        </>
    );
};

export default AppliedJobs;