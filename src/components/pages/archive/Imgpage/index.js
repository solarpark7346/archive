import React, { useEffect } from "react"
import ImgSection from "../ImgSection";
import './style.css'

const A_ImgSection = () => {
    return (
        <React.Fragment>            
            <div className="main_column">
                <div className="img-section">
                    <center><h3>Gallery</h3></center>
                    <ImgSection />
                </div>
            </div>
        </React.Fragment>
    )
}

export default A_ImgSection;