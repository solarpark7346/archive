import React, { useState, useEffect, useRef } from "react";

import Dots from "../../util/nav/Dots";
import Navbar from "../../util/nav/Nav";
import IMG_PAGE from "../../util/img_page";

import N_banner from "./banner";
import N_FEATURED_PODCASTS from "./FEATURED_PODCASTS";

import iphone_page from "../../../assets/img/ninefruit/iphone_page.jpg"
import N_MEMBERS from "./MEMBERS";

const DIVIDER_HEIGHT = 5;

const Ninefruit = (props) => {
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
                <N_banner />
            </div>

            <div className="inner bg-Second">
                <N_FEATURED_PODCASTS />
            </div>

            <div className="inner bg-Third">
                <IMG_PAGE img={iphone_page}/>
            </div>

            <div className="inner bg-Fourth">
                <N_MEMBERS />
            </div>
        </div>
    );
}

export default Ninefruit;
