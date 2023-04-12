import React, {useEffect, useState} from 'react';
import WebpageTitle from "./component/WebpageTitle.jsx";
import AppliedJobsComponent from "./component/AppliedJobsComponent.jsx";
import {useLoaderData} from "react-router-dom";

const AppliedJobs = () => {
    // const [data, setData] = useState([]);
    let dataStorage = [];
    const [applied, setApplied] = useState([]);
    const { jobPostings } = useLoaderData();
    useEffect(() => {
        const storeData = JSON.parse(localStorage.getItem('applied-job'));
        storeData?.map(id => {
            // console.log(id);
            const findData = jobPostings?.find(data => parseInt(id) === parseInt(data.id));
            const findApplyData = dataStorage.push(findData);

            // console.log(findData);
        })
        setApplied(dataStorage);

        // console.log(data);

    }, []);

    return (
        <>
            <WebpageTitle title="Job Details" backgroundImage="https://www.feednh.org/wp-content/uploads/2014/04/page-title-background.jpg"></WebpageTitle>


            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="container mx-auto px-4">
                    {
                        applied?.map(data => <AppliedJobsComponent key={data.id} data={data}></AppliedJobsComponent>)
                    }

                </div>
            </div>
        </>
    );
};

export default AppliedJobs;