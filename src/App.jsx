import React from 'react';
import './App.css'
import Header from "./component/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./component/Footer.jsx";

function App() {

  return (
    <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default App
