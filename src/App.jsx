import React from 'react';
import './App.css'
import Header from "./component/Header.jsx";
import HeroSection from "./component/HeroSection.jsx";
import JobCategoryList from "./component/JobCategoryList.jsx";
import FeaturedJobsSection from "./component/FeaturedJobsSection.jsx";

function App() {

  return (
    <>
        <Header></Header>
        <HeroSection></HeroSection>
        <JobCategoryList></JobCategoryList>
        <FeaturedJobsSection></FeaturedJobsSection>
    </>
  )
}

export default App
