import React from 'react';
import {Link} from "react-router-dom";

const AppliedJobsComponent = ({ data }) => {
    return (
        <div className="border mb-4 bg-white dark:bg-gray-700 p-6 rounded-lg flex justify-between">
            <div className="flex justify-center items-center">
                <img
                    src={data.companyLogo}
                    alt="Job"
                    className="w-40 h-20 mb-4 "
                />
                <div className="pl-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {data.companyName}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {data.jobTitle}
                    </p>
                    <div className="flex mb-4">
                        <div className="border dark:text-white px-4 py-2 rounded mr-2">
                            {data.remoteOrOnsite}
                        </div>
                    </div>
                    <div className="flex">
                        <p className="text-gray-600 dark:text-gray-400 mr-2">
                            <b>Location:</b> {data.location}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 ml-2">
                            <b>Salary:</b> {data.salary}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex-none w-32">
                    <Link to={`/details/${data.id}`} className="bg-gradient-to-r from-purple-300 to-indigo-800 text-white font-bold px-4 py-2 rounded-md hover:bg-purple-600 dark:bg-gradient-to-r dark:from-gray-700 dark:to-black dark:text-gray-300 dark:hover:text-gray-400 dark:hover:bg-gray-700 mt-4 md:mt-6">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobsComponent;