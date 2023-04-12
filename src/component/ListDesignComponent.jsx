import React from 'react';

const ListDesignComponent = ({category}) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg h-full">
                <img src={category.image} alt="category image"/>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                    {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                    {category.description}
                </p>
            </div>
        </div>
    );
};

export default ListDesignComponent;