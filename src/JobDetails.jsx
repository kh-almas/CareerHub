import React, {useEffect, useState} from 'react';
import Header from "./component/Header.jsx";
import JobDetailsComponent from "./component/JobDetailsComponent.jsx";
import WebpageTitle from "./component/WebpageTitle.jsx";
import {useLoaderData, useParams} from "react-router-dom";

const JobDetails = () => {
    const [data, setData] = useState([]);
    const { jobPostings } = useLoaderData();
    const {id} = useParams();
    useEffect(() => {
        const findData = jobPostings?.find(data => parseInt(id) === parseInt(data.id));
        setData(findData);
    },[]);
    return (
        <>
            <JobDetailsComponent data={data}></JobDetailsComponent>
        </>
    );
};

export default JobDetails;