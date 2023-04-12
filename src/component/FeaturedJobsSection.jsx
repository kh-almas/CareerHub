import React from 'react';
import JobInfo from "./JobInfo.jsx";

const FeaturedJobsSection = ({jobData, viewAllJob, viewLessJob, showAll}) => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                            Featured Jobs
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-12">
                            Check out some of our top job opportunities
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        {
                            jobData?.map( job => <JobInfo key={job.id} job={job} ></JobInfo> )
                        }
                    </div>
                    <div className="flex items-center justify-center">
                        {
                            showAll ===
                            false
                                ?
                                    <button onClick={() => viewAllJob()} className="bg-gradient-to-r from-purple-300 to-indigo-800 text-white font-bold px-4 py-2 rounded-md hover:bg-purple-600 dark:bg-gradient-to-r dark:from-gray-700 dark:to-black dark:text-gray-300 dark:hover:text-gray-400 dark:hover:bg-gray-700 mt-4 md:mt-12">
                                        See All Jobs
                                    </button>
                                :
                                <button onClick={() => viewLessJob()} className="bg-gradient-to-r from-purple-300 to-indigo-800 text-white font-bold px-4 py-2 rounded-md hover:bg-purple-600 dark:bg-gradient-to-r dark:from-gray-700 dark:to-black dark:text-gray-300 dark:hover:text-gray-400 dark:hover:bg-gray-700 mt-4 md:mt-12">
                                    See less
                                </button>
                        }
                    </div>
                </div>
            </div>
    );
};

export default FeaturedJobsSection;