import React from 'react';

const JobDetailsComponent = () => {
    return (
        <div className="bg-white dark:bg-gray-700 p-8 grid grid-cols-3">
            <div className="col-span-2">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Job Description:
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.
                    </p>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Job Responsibility:
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.
                    </p>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Educational Requirements:
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Bachelor degree to complete any reputational university.
                    </p>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Experiences:
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        2-3 Years in this field.
                    </p>
                </div>
            </div>
            <aside className="col-span-1 p-8">
                {/* Sidebar content */}
                <div>
                    <div className="mb-4">
                        <h3 className="border-b pb-4 text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                            Job Details
                        </h3>
                        <div className="flex items-center mb-2">
                            <span className="text-gray-600 dark:text-gray-400"><b>Salary :</b> 100K - 150K (Per Month)</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-gray-600 dark:text-gray-400"><b>Job Title :</b> Product Designer</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="border-b pb-4 text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                            Contact Information
                        </h3>
                        <div className="flex items-center mb-2">
                            <span className="text-gray-600 dark:text-gray-400"><b>Phone :</b> 01750-00 00 00</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <span className="text-gray-600 dark:text-gray-400"><b>Email :</b> info@gmail.com</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <span className="text-gray-600 dark:text-gray-400"><b>Address :</b> Dhanmondi 32, Sukrabad, Dhaka, Bangladesh</span>
                        </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-purple-300 to-indigo-800 text-white font-bold px-4 py-2 rounded-md hover:bg-purple-600 dark:bg-gradient-to-r dark:from-gray-700 dark:to-black dark:text-gray-300 dark:hover:text-gray-400 dark:hover:bg-gray-700 mt-4 md:mt-6">
                        Apply Now
                    </button>
                </div>
            </aside>
        </div>
    );
};

export default JobDetailsComponent;
