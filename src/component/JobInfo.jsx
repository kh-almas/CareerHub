import React from 'react';
import {Link} from "react-router-dom";

const JobInfo = ({ job }) => {
    return (
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
            <img
                src={job.companyLogo}
                alt="Job"
                className="w-40 h-20 mb-4"
            />
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                { job.companyName }
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
                { job.jobTitle }
            </p>
            <div className="flex mb-4">
                <div className="border dark:text-white px-4 py-2 rounded mr-2">
                    { job.remoteOrOnsite }
                </div>
            </div>
            <div className="flex">
                <p className="text-gray-600 dark:text-gray-400 mr-2">
                    <b>Location:</b> { job.location }
                </p>
                <p className="text-gray-600 dark:text-gray-400 ml-2">
                    <b>Salary:</b> { job.salary }
                </p>
            </div>
            <div className="mt-8">
                <Link to={`/details/${job.id}`} className="bg-gradient-to-r from-purple-300 to-indigo-800 text-white font-bold px-4 py-2 rounded-md hover:bg-purple-600 dark:bg-gradient-to-r dark:from-gray-700 dark:to-black dark:text-gray-300 dark:hover:text-gray-400 dark:hover:bg-gray-700 mt-4 md:mt-6">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default JobInfo;