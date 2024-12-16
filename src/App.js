
import React from "react";
import "./App.css";

import Posts from "./Pages/Posts";
import Navbar from "./Component/BlogNav"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Post1 from "./Pages/Post1";
import Post2 from "./Pages/Post2";
import Post3 from "./Pages/Post3";
import Post4 from "./Pages/Post4";
import JavaScript from "./Pages/JavaScript";
import AboutDataStructure from "./Pages/AboutDataStructure";
import Algorithm from "./Pages/Algorithm";
import ComputerNetwork from "./Pages/ComputerNetwork";
import ErrorPage from "./Pages/ErrorPage";

const App = () => {
    return (
        <>
        {/* <div className="main-container" style={{backgroundColor: "aliceblue"}}> */}
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/javascripts' element={<Post1/>}/>
        <Route path='/DataStructure' element={<Post2/>}/>
        <Route path='/Algorithm' element={<Post3/>}/>
        <Route path='/ComputerNetwork' element={<Post4/>}/>
        <Route path='/aboutjava' element={<JavaScript/>}/>
        <Route path="/aboutdata" element={<AboutDataStructure/>}/>
        <Route path="/aboutalgorithm" element={<Algorithm/>}/>
        <Route path="/aboutcomputernetwork" element={<ComputerNetwork/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        </Route>
        </Routes>
        </BrowserRouter>
        {/* </div> */}
        </>
    )
}

export default App;
