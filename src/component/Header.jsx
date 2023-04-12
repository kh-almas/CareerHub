import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-4 flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-lg font-bold mb-4 md:mb-0">My Website</h1>

            <nav className="flex items-center space-x-4">
                <Link to={'/'} className="hover:text-gray-400 border-b-2 border-transparent hover:border-gray-400">Home</Link>
                <Link to={'/statistics'} className="hover:text-gray-400 border-b-2 border-transparent hover:border-gray-400">Statistics</Link>
                <Link to={'/applied-job'} className="hover:text-gray-400 border-b-2 border-transparent hover:border-gray-400">Applied Jobs</Link>
                <a href="#" className="hover:text-gray-400 border-b-2 border-transparent hover:border-gray-400">Blog</a>
                <a href="#" className="hover:text-gray-400 border-b-2 border-transparent hover:border-gray-400">Site Details</a>
            </nav>

            <button className="bg-gradient-to-r from-purple-300 to-indigo-800 text-white font-bold px-4 py-2 rounded-md hover:bg-purple-600 dark:bg-gradient-to-r dark:from-gray-700 dark:to-black dark:text-gray-300 dark:hover:text-gray-400 dark:hover:bg-gray-700 mt-4 md:mt-0">
                Start Applying
            </button>
        </header>
    );
};

export default Header;
