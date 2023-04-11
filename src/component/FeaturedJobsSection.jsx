import React from 'react';

const FeaturedJobsSection = () => {
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
                        {/* Card 1 */}
                        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
                            <img
                                src="https://via.placeholder.com/80"
                                alt="Job"
                                className="w-40 h-20 mb-4"
                            />
                            {/* Title */}
                            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                                Job Title 1
                            </h3>
                            {/* Tagline */}
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Tagline of job 1
                            </p>
                            {/* Buttons */}
                            <div className="flex mb-4">
                                <div className="border dark:text-white px-4 py-2 rounded mr-2">
                                    Remote
                                </div>
                                <div className="border dark:text-white px-4 py-2 rounded">
                                    Full Time
                                </div>
                            </div>
                            {/* Location and Salary */}
                            <div className="flex">
                                <p className="text-gray-600 dark:text-gray-400 mr-2">
                                    <b>Location:</b> City, Country
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 ml-2">
                                    <b>Salary:</b> $50,000 - $60,000
                                </p>
                            </div>
                            <button className="bg-gradient-to-r from-purple-300 to-indigo-800 text-white font-bold px-4 py-2 rounded-md hover:bg-purple-600 dark:bg-gradient-to-r dark:from-gray-700 dark:to-black dark:text-gray-300 dark:hover:text-gray-400 dark:hover:bg-gray-700 mt-4 md:mt-6">
                                View Details
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-gradient-to-r from-purple-300 to-indigo-800 text-white font-bold px-4 py-2 rounded-md hover:bg-purple-600 dark:bg-gradient-to-r dark:from-gray-700 dark:to-black dark:text-gray-300 dark:hover:text-gray-400 dark:hover:bg-gray-700 mt-4 md:mt-12">
                            See All Jobs
                        </button>
                    </div>
                </div>
            </div>
    );
};

export default FeaturedJobsSection;