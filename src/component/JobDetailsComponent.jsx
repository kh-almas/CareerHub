import React from 'react';
import WebpageTitle from "./WebpageTitle.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetailsComponent = ({data}) => {
    const {id, jobTitle, location, salary, jobDescription, jobResponsibility, educationalRequirements, experiences, contactInformation } = data;

    const apply = (id) =>{
        let item = [];
        const getStorageItem = JSON.parse(localStorage.getItem('applied-job'));
        if(getStorageItem)
        {
            item = [...getStorageItem];
        }
        if(item.includes(id))
        {
            toast("Already saved!");
            return;
        }
        item.push(id);
        localStorage.setItem('applied-job', JSON.stringify(item));

    }
    return (
        <>
            <ToastContainer />
            <WebpageTitle title={jobTitle} backgroundImage="https://www.feednh.org/wp-content/uploads/2014/04/page-title-background.jpg"></WebpageTitle>
            <div className="bg-white dark:bg-gray-700 p-8 grid grid-cols-3">
                <div className="col-span-2">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                            Job Description:
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            {jobDescription}
                        </p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                            Job Responsibility:
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            {jobResponsibility}
                        </p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                            Educational Requirements:
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            {educationalRequirements}
                        </p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                            Experiences:
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            {experiences}
                        </p>
                    </div>
                </div>
                <aside className="col-span-1 p-8">
                    <div>
                        <div className="mb-4">
                            <h3 className="border-b pb-4 text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                                Job Details
                            </h3>
                            <div className="flex items-center mb-2">
                                <span className="text-gray-600 dark:text-gray-400"><b>Salary :</b> {salary}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-gray-600 dark:text-gray-400"><b>Job Title :</b> {jobTitle}</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="border-b pb-4 text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                                Contact Information
                            </h3>
                            <div className="flex items-center mb-2">
                                <span className="text-gray-600 dark:text-gray-400"><b>Phone :</b> {contactInformation?.phone}</span>
                            </div>
                            <div className="flex items-center mb-2">
                                <span className="text-gray-600 dark:text-gray-400"><b>Email :</b> {contactInformation?.email}</span>
                            </div>
                            <div className="flex items-center mb-2">
                                <span className="text-gray-600 dark:text-gray-400"><b>Address :</b> {location}</span>
                            </div>
                        </div>
                        <button onClick={() => apply(id)} className="w-full bg-gradient-to-r from-purple-300 to-indigo-800 text-white font-bold px-4 py-2 rounded-md hover:bg-purple-600 dark:bg-gradient-to-r dark:from-gray-700 dark:to-black dark:text-gray-300 dark:hover:text-gray-400 dark:hover:bg-gray-700 mt-4 md:mt-6">
                            Apply Now
                        </button>
                    </div>
                </aside>
            </div>
        </>
    );
};

export default JobDetailsComponent;
