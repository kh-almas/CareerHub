import React from "react";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-gray-800">404</h1>
                <p className="text-xl font-light text-gray-600">Page not found</p>
                <p className="text-lg text-gray-600 mt-4">
                    The page you are looking for does not exist or has been moved.
                </p>
                <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-8 rounded">
                    Go back to Home
                </button>
            </div>
        </div>
    );
};

export default NotFound;