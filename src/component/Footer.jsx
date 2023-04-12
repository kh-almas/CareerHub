import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto py-8 px-4">
                <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-2/6 mb-8">
                        <h3 className="text-2xl font-bold mb-4">Company Name</h3>
                        <p className="text-sm mb-4">
                            There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
                        </p>
                        <p className="text-sm">
                            © 2023 All rights reserved.
                        </p>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/6 mb-8">
                        <h3 className="text-2xl font-bold mb-4">Company</h3>
                        <ul>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-sm hover:text-gray-400 transition duration-300"
                                >
                                    About Us
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-sm hover:text-gray-400 transition duration-300"
                                >
                                    Work
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-sm hover:text-gray-400 transition duration-300"
                                >
                                    Latest News
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-sm hover:text-gray-400 transition duration-300"
                                >
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/6 mb-8">
                        <h3 className="text-2xl font-bold mb-4">Product</h3>
                        <ul>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-sm hover:text-gray-400 transition duration-300"
                                >
                                    Prototype
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-sm hover:text-gray-400 transition duration-300"
                                >
                                    Plans & Pricing
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-sm hover:text-gray-400 transition duration-300"
                                >
                                    Customers
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-sm hover:text-gray-400 transition duration-300"
                                >
                                    Integrations
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/6 mb-8">
                        <h3 className="text-2xl font-bold mb-4">Support</h3>
                        <ul>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-sm hover:text-gray-400 transition duration-300"
                                >
                                    Help Desk
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-sm hover:text-gray-400 transition duration-300"
                                >
                                    Sales
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-sm hover:text-gray-400 transition duration-300"
                                >
                                    Become a Partner
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-sm hover:text-gray-400 transition duration-300"
                                >
                                    Developers
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/6 mb-8">
                        <h3 className="text-2xl font-bold mb-4">Contact</h3>
                        <p>524 Broadway , NYC +1 777 - 978 - 5570</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;