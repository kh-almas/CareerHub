import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const JobCategoryList = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
                    Job Categories
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                    Browse through our popular job categories
                </p>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
                        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg h-full">
                            <div className="text-center">
                                <i className="fas fa-code text-4xl text-blue-600 dark:text-blue-400 mb-4"></i>
                                <i ></i>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-2 text-gray-900 dark:text-gray-100">
                                Developer
                            </h3>
                            <p className="text-center text-gray-600 dark:text-gray-400">
                                Find opportunities for web, mobile, and software development
                            </p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
                        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg h-full">
                            <div className="text-center">
                                <i className="fas fa-cog text-4xl text-blue-600 dark:text-blue-400 mb-4"></i>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-2 text-gray-900 dark:text-gray-100">
                                Designer
                            </h3>
                            <p className="text-center text-gray-600 dark:text-gray-400">
                                Explore opportunities for UX/UI design, graphic design, and more
                            </p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
                        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg h-full">
                            <div className="text-center">
                                <i className="fas fa-medkit text-4xl text-blue-600 dark:text-blue-400 mb-4"></i>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-2 text-gray-900 dark:text-gray-100">
                                Healthcare
                            </h3>
                            <p className="text-center text-gray-600 dark:text-gray-400">
                                Find opportunities in nursing, pharmacy, medical research, and more
                            </p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
                        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg h-full">
                            <div className="text-center">
                                <i className="fas fa-medkit text-4xl text-blue-600 dark:text-blue-400 mb-4"></i>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-2 text-gray-900 dark:text-gray-100">
                                Healthcare
                            </h3>
                            <p className="text-center text-gray-600 dark:text-gray-400">
                                Find opportunities in nursing, pharmacy, medical research, and more
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default JobCategoryList;