import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Show from "./hooks/Context/Show";
import Count from "./hooks/Count";
import Datafetch from "./hooks/Datafetch";
import Effect from "./hooks/Effect";
import Mainprops from "./hooks/Mainprops";
import About from "./pages/About";
import FormValidation from "./pages/FormValidation";
import Home from "./pages/Home";
import Signup from "./pages/Signup";


function Main(){
    return(
        <>
        
        <Router>
            <Routes>
                {/* <Route path="/about" element={<About/>}/> */}
                {/* <Route path="/second" element={<Second/>}/> */}
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/signup" element={<Signup/>}/>


                {/* hooks  */}

                <Route path="/count" element = {<Count/>}/>
                <Route path="/test" element={<Effect/>}/>
                <Route path="/api" element={<Datafetch/>}/>
                <Route path="/props" element={<Mainprops/>}/>


                {/* Context  */}
                <Route path="contextapi" element={<Show/>}/>


                {/* Validation Form  */}
                <Route path="validform" element={<FormValidation/>}/>
            </Routes>

        </Router>

        </>
    )
}

export default Main;