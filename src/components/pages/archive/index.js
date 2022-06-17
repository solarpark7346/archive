import React, { useState, useEffect, useRef } from "react";
import './style.css'

import Dots from "../../util/nav/Dots";
import Navbar from "../../util/nav/Nav";

import A_banner from "./banner";
import A_show from "./show";
import A_platform from "./platform";

const DIVIDER_HEIGHT = 5;

const Archive = (props) => {
    const outerDivRef = useRef();
    const [scrollIndex, setScrollIndex] = useState(1);

    useEffect(() => {
        const wheelHandler = (e) => {
            e.preventDefault();

            const { deltaY } = e;
            const { scrollTop } = outerDivRef.current; 
            const pageHeight = window.innerHeight;

            if (deltaY > 0) {
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    console.log("current 1 page, down");

                    outerDivRef.current.scrollTo({
                    top: pageHeight + DIVIDER_HEIGHT,
                    left: 0,
                    behavior: "smooth",
                    });

                    setScrollIndex(2);

                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    console.log("current 2 page, down");

                    outerDivRef.current.scrollTo({
                    top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                    left: 0,
                    behavior: "smooth",
                    });

                    setScrollIndex(3);

                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3){
                    console.log("current 3 page, down");

                    outerDivRef.current.scrollTo({
                    top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
                    left: 0,
                    behavior: "smooth",
                    });

                    setScrollIndex(4);

                } else {
                    console.log("current 4 page, down");

                    outerDivRef.current.scrollTo({
                    top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
                    left: 0,
                    behavior: "smooth",
                    });

                    setScrollIndex(4);
                } 

                } else {
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    console.log("current 1 page, up");
                    
                    outerDivRef.current.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                    });

                    setScrollIndex(1);

                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    console.log("current 2 page, up");

                    outerDivRef.current.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                    });

                    setScrollIndex(1);

                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3){
                    console.log("current 3 page, up");

                    outerDivRef.current.scrollTo({
                    top: pageHeight + DIVIDER_HEIGHT,
                    left: 0,
                    behavior: "smooth",
                    });
                    
                    setScrollIndex(2);
                } else {
                    console.log("current 4 page, up");

                    outerDivRef.current.scrollTo({
                    top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                    left: 0,
                    behavior: "smooth",
                    });
                    
                    setScrollIndex(3);
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

            <div className="inner_row bg-Third">
                <A_platform />
            </div>

            <div className="inner bg-Fourth">
                
            </div>
        </div>
    );
}

export default Archive;
