import React from 'react';
import { Link } from 'react-router-dom';
import gsap from "gsap";

import archive_logo_img from '../../../../assets/img/logo/archive_logo.png'
import ninefruit_logo_img from '../../../../assets/img/logo/ninefruit_logo.jpg'

const A_platform = (props) => {
    const Animation_img1   = React.useRef(null);
    const Animation_img2   = React.useRef(null);

    React.useEffect(() => {
        gsap.utils.toArray("img").forEach(img => {
            let hover = gsap.to(img, {
                scale: 1.02, 
                duration: 0.5, 
                y: -10,
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
            <div className='main_column'>
                <h1>
                    다른 플랫폼 방문해보기
                </h1>
                <div className='main_row'>
                    <div>
                        <img 
                            className='h_logo_img' 
                            src={archive_logo_img}
                            ref={Animation_img1} />
                        <center>
                            <h3>아카이브</h3>
                        </center>
                    </div>
                    
                    <div>
                        <Link to="/archive/main/ninefruit">
                            <img 
                                className='h_logo_img' 
                                src={ninefruit_logo_img} 
                                ref={Animation_img2}/>
                        </Link>

                        <center>
                            <h3>나인프루트</h3>
                        </center>
                    </div>                
                </div>
            </div>
        </React.Fragment>
    )
}

export default A_platform;
