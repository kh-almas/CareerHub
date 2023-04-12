import React from 'react';

const BlogComponent = ({ question, answer, darkMode }) => {

    return (
        <div className="flex flex-col sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 pb-8">
            <div className="rounded-lg p-6 shadow-md border">
                <h2 className={`text-lg font-semibold pb-4 text-gray-600 dark:text-gray-300`}>{question}</h2>
                <p className="text-gray-600 dark:text-gray-300">{answer}</p>
            </div>
        </div>
    );
};

export default BlogComponent;