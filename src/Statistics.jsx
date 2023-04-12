import React from 'react';
import StatisticsComponent from "./component/StatisticsComponent.jsx";
import WebpageTitle from "./component/WebpageTitle.jsx";

const Statistics = () => {
    return (
        <div>
            <WebpageTitle title="Statistics with AreaResponsiveContainer chart" backgroundImage="https://www.feednh.org/wp-content/uploads/2014/04/page-title-background.jpg"></WebpageTitle>
            <StatisticsComponent></StatisticsComponent>
        </div>
    );
};

export default Statistics;