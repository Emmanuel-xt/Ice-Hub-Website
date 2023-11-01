import { faArrowUpFromGroundWater, faAward, faCheck, faPersonRifle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import HomeAbout from "./HomeAbout";
import HomeChoice from "./HomeChoice";
import HomeServices from "./HomeService";
import HomeContact from "./HomeContact";


const Home = () => {

    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setCount((prevCount) => prevCount + 1);
    //   }, 10); 
  
    //   return () => clearInterval(interval);
    // }, []);
  
    // useEffect(() => {
    //   if (count >= 10) {
    //     clearInterval(interval);
    //   }
    // }, [count]);
    return ( 
        <>
        <section className="home">
            <div className="landing-page">
                <div className="landing-content">
                <p className=" wow slideInDown">CREATIVE & INNOVATIVE</p>
                <h1 className=" wow animate__zoomIn" >Creative & Innovative Digital Solution</h1>
                <button className="slideInRight">Contact Us</button>
                </div>
            </div>

            <div className="boxes zoomIn" data-wow-delay="0.1s">
                <div className="box wow zoomIn">
                    <div className="box-icon">
                        <FontAwesomeIcon icon={faPersonRifle} />
                    </div>
                    <div className="box-texts">
                         <span>Intern</span>
                         <span className="number">200</span>
                    </div>
                </div>
                <div className="box midb wow zoomIn">
                    <div className="box-icon midi">
                    <FontAwesomeIcon icon={faCheck} />

                    </div>
                    <div className="box-texts mid">
                         <span className="midt">PROJECTS</span>
                         <span className="number midn">50</span>
                    </div>
                </div>
                <div className="box wow zoomIn">
                    <div className="box-icon">
                    <FontAwesomeIcon icon={faAward} />

                    </div>
                    <div className="box-texts">
                         <span>TEAM MEMBERS</span>
                         <span className="number">7</span>
                    </div>
                </div>
            </div>
            <div className="after-landing">
            <HomeAbout/>
            <HomeChoice/>
            <HomeServices/>
            <HomeContact/>

            </div>

            
        </section>
        </>
     );
}
 
export default Home; 