import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

import gsap from "gsap";

import logo_img from "../../assets/img/logo/archive_logo.png"

const Home = (props) => {
    const Animation_HOME   = React.useRef(null);

    React.useEffect(() => {
        // window.onbeforeunload = function pushRefresh() {
        //     window.scrollTo(0, 0);
        // };

        // gsap.from('img',{
        //     opacity: 0,
        //     duration: 5
        // });
        
        gsap.utils.toArray("img").forEach(img => {
            let hover = gsap.to(img, {
                scale: 1.12, 
                duration: 0.5, 
                paused: true, 
                ease: "power1.inOut"});
            img.addEventListener("mouseenter", 
                () => hover.play(),
                console.log('gsap animation event run')
            );
            img.addEventListener("mouseleave", () => hover.reverse());
            }
        );
    })

    return(
        <React.Fragment>
            <div className='main_column' ref={Animation_HOME}>
                <Link to="/archive/main">
                    <img className='h_logo_img' src={logo_img} />
                </Link>
                
                <span>위의 어플을 클릭하세요!</span>
            </div>
        </React.Fragment>
    );
}

export default Home;
