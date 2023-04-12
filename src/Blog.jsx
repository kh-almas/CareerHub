import React from 'react';
import WebpageTitle from "./component/WebpageTitle.jsx";
import BlogComponent from "./component/BlogComponent.jsx";


const Blog = ({ darkMode }) => {
    const faqs = [
        {
            question: 'When should you use context API?',
            answer:
                'Context API in React is used when you need to share data across components without passing props down the component tree. It\'s useful when you have data that is used by multiple components, and you don’t want to pass it down through props to all the intermediate components.',
        },
        {
            question: 'What is a custom hook?',
            answer:
                'A custom hook in React is a JavaScript function that starts with the word "use" and allows you to reuse component logic. Custom hooks enable you to extract logic from components and share it across multiple components in your application, making your code more reusable and easier to manage.',
        },
        {
            question: 'What is useRef?',
            answer:
                'useRef is a hook in React that allows you to create a mutable variable that persists across renders. It returns a mutable ref object that can hold any value, similar to an instance variable in a class. useRef is commonly used to access and manipulate DOM elements or to store previous values to compare with current values in a component.',
        },
        {
            question: 'What is useMemo?',
            answer:
                'useMemo is a hook in React that allows you to memoize the result of a computation, so that it\'s only recomputed if its dependencies change. It helps to optimize performance by preventing unnecessary recalculations of expensive computations in a component, especially in scenarios where the computation is computationally expensive or time-consuming.',
        },
    ];

    return (
        <div className="bg-white dark:bg-gray-800 pb-16">
            <WebpageTitle title="Asked Questions Answers" backgroundImage="https://www.feednh.org/wp-content/uploads/2014/04/page-title-background.jpg"></WebpageTitle>
            <div className="flex flex-wrap justify-center pt-16">
                {faqs.map((faq, index) => (
                    <BlogComponent
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        darkMode={darkMode}
                    />
                ))}
            </div>
        </div>
    );
};

export default Blog;
