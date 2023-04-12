import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListDesignComponent from "./ListDesignComponent.jsx";

const JobCategoryList = () => {
    const [categories, setCategory] = useState([]);
    useEffect( () => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategory(data.items));
    }, []);
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

                    {
                        categories?.map(category => <ListDesignComponent key={category.id} category={category} />)
                    }
                </div>
            </div>
        </div>
    )
};

export default JobCategoryList;