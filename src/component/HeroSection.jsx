import React from 'react';

const HeroSection = () => {
    return (
        <section className="px-8 flex flex-col-reverse lg:flex-row bg-gray-100 dark:bg-gray-900">
            {/* Left section */}
            <div className="flex flex-col justify-center items-start w-full py-16 lg:py-20 lg:w-3/5">
                <h1 className="text-3xl lg:text-4xl font-bold text-left text-gray-900 dark:text-white mb-6 lg:mb-8">
                    One Step Closer To Your <br/>
                    <span className="bg-gradient-to-r text-transparent bg-clip-text from-blue-400 to-purple-600">
                      Dream Job
                    </span>
                </h1>
                <p className="text-lg lg:text-xl text-left text-gray-700 dark:text-gray-300 max-w-lg mb-6">
                    Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>
                <button className="bg-gradient-to-r from-purple-300 to-indigo-800 text-white font-bold px-4 py-2 rounded-md hover:bg-purple-600 dark:bg-gradient-to-r dark:from-gray-700 dark:to-black dark:text-gray-300 dark:hover:text-gray-400 dark:hover:bg-gray-700 mt-4 md:mt-0">
                    Get Started
                </button>
            </div>

            {/* Right section */}
            <div className="lg:w-2/5 flex align-center justify-center">
                <img className="w-full h-500px object-cover lg:h-full" src="https://via.placeholder.com/500" alt="Hero Image" style={{ height: '500px' }} />
            </div>
        </section>
    );
};

export default HeroSection;
