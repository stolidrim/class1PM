import React from "react";
import Card from "../Component/Card";
import Nav from "../Component/Nav";
import Slide from "../Component/Slide";
import Trending from "../Component/Trending";
import Footer from "../Component/Footer"



function Home(){
    return(
        <>
        < div>
            <Nav/ >
            <Slide/>
            <Card/>
            <Trending/>
            <Footer/>
         
        </div>
        </>
    )
}

export default Home;