import React from 'react';

const Header = () => {
    return (
        <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-4 flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-lg font-bold mb-4 md:mb-0">My Website</h1>

            <nav className="flex items-center space-x-4">
                <a href="#" className="hover:text-gray-400 border-b-2 border-transparent hover:border-gray-400">Home</a>
                <a href="#" className="hover:text-gray-400 border-b-2 border-transparent hover:border-gray-400">Statistics</a>
                <a href="#" className="hover:text-gray-400 border-b-2 border-transparent hover:border-gray-400">Applied Jobs</a>
                <a href="#" className="hover:text-gray-400 border-b-2 border-transparent hover:border-gray-400">Blog</a>
                <a href="#" className="hover:text-gray-400 border-b-2 border-transparent hover:border-gray-400">Site Details</a>
            </nav>

            <button className="bg-gradient-to-r from-purple-300 to-indigo-800 text-white font-bold px-4 py-2 rounded-md hover:bg-purple-600 dark:bg-gradient-to-r dark:from-gray-700 dark:to-black dark:text-gray-300 dark:hover:text-gray-400 dark:hover:bg-gray-700 mt-4 md:mt-0">
                Star Applying
            </button>
        </header>
    );
};

export default Header;
