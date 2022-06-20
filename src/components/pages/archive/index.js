import React, { useState, useEffect, useRef } from "react";
import './style.css'

import Dots from "../../util/nav/Dots";
import Navbar from "../../util/nav/Nav";

import A_banner from "./banner";
import A_show from "./show";
import A_platform from "./platform";
import A_Video from "./video"
import Email from "../../util/Email/email";
import Contact from "../../util/Email";
import A_ImgSection from "./Imgpage";

const DIVIDER_HEIGHT = 5;

const Archive = (props) => {
    const outerDivRef = useRef();
    const [scrollIndex, setScrollIndex] = useState(1);

    useEffect(() => {
        console.log('Wellcome archive page!!!', outerDivRef);

        const wheelHandler = (e) => {
            e.preventDefault();

            const { deltaY } = e;
            const { scrollTop } = outerDivRef.current; 
            const pageHeight = window.innerHeight;

            if (deltaY > 0) {
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    console.log("current 1 page [down], Refresh 2 page [current]");

                    outerDivRef.current.scrollTo({
                    top: pageHeight + DIVIDER_HEIGHT,
                    left: 0,
                    behavior: "smooth",
                    });

                    setScrollIndex(2);

                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    console.log("current 2 page [down], Refresh 3 page [current]");

                    outerDivRef.current.scrollTo({
                    top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                    left: 0,
                    behavior: "smooth",
                    });

                    setScrollIndex(3);

                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3){
                    console.log("current 3 page [down], Refresh 4 page [current]");

                    outerDivRef.current.scrollTo({
                    top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
                    left: 0,
                    behavior: "smooth",
                    });

                    setScrollIndex(4);

                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4){
                    console.log("current 4 page [down], Refresh 5 page [current]");

                    outerDivRef.current.scrollTo({
                    top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
                    left: 0,
                    behavior: "smooth",
                    });

                    setScrollIndex(5);

                } else {
                    console.log("current 5 page [down], NONE");

                    outerDivRef.current.scrollTo({
                    top: pageHeight * 5 + DIVIDER_HEIGHT * 5,
                    left: 0,
                    behavior: "smooth",
                    });

                    setScrollIndex(6);
                } 

                } else {
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    console.log("current 1 page [up], NONE");
                    
                    outerDivRef.current.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                    });

                    setScrollIndex(1);

                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    console.log("current 2 page [up], Refresh 1 page [current]");

                    outerDivRef.current.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                    });

                    setScrollIndex(1);

                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3){
                    console.log("current 3 page [up], Refresh 2 page [current]");

                    outerDivRef.current.scrollTo({
                    top: pageHeight + DIVIDER_HEIGHT,
                    left: 0,
                    behavior: "smooth",
                    });
                    
                    setScrollIndex(2);

                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
                    console.log("current 4 page [up], Refresh 3 page [current]");

                    outerDivRef.current.scrollTo({
                    top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                    left: 0,
                    behavior: "smooth",
                    });
                    
                    setScrollIndex(3);
                }

                else if (scrollTop >= pageHeight && scrollTop < pageHeight * 5){
                    console.log("current 5 page [up], Refresh 4 page [current]");

                    outerDivRef.current.scrollTo({
                    top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
                    left: 0,
                    behavior: "smooth",
                    });
                    
                    setScrollIndex(4);
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 6){
                    console.log("current 6 page [up], Refresh 5 page [current]");

                    outerDivRef.current.scrollTo({
                    top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
                    left: 0,
                    behavior: "smooth",
                    });
                    
                    setScrollIndex(5);
                }
            }
        };

    const outerDivRefCurrent = outerDivRef.current;
        outerDivRefCurrent.addEventListener("wheel", wheelHandler);

        return () => {
            outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
        };
    }, []);
    
    return (
        <div ref={outerDivRef} className="outer">
            <Dots scrollIndex={scrollIndex} />
            <Navbar />

            <div className="inner bg-First">
                <A_banner />
            </div>

            <div className="inner bg-Second">
                <A_show />
            </div>

            <div className="inner bg-Third">
                <div className="video_section">
                    <center><h2>Video</h2></center>
                    <A_Video />
                </div>
            </div>

            <div className="inner bg-Fourth">
                <div className="video_section">
                    <A_ImgSection/>
                </div>
            </div>

            <div className="inner bg-Five">
                <A_platform />
            </div>

            <div className="inner bg-Six">
                <Contact />
            </div>
        </div>
    );
}

export default Archive;
