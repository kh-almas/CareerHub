import React from "react";

const WebpageTitle = ({ title, subtitle, backgroundImage }) => {
    const backgroundStyles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "200px",
    };

    return (
        <div className="relative">
            <div className="h-96" style={backgroundStyles}></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white">{title}</h1>
                    <p className="text-xl font-light text-white">{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default WebpageTitle;
