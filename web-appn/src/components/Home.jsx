import React from "react";
import './Home.css'
 import { Link } from "react-router-dom";
import NavBar from "./NavBar.jsx";
// import Images from "./Images";

const Home=()=>(
    <>
        <div className="container">
            <NavBar />
         <section className="home-center">
            <h1 className="home-heading">Turning Videos to a Cinematic Masterpiece</h1>
            <Link className="link-contact">Contact Me</Link>
         </section>
        </div>  
    </>
)
export default Home