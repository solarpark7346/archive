import { useEffect } from "react";

const Dot = ({ num, scrollIndex }) => {

    const button = (num) => {
        console.log('page button click!');
    }

    return (
        <button 
            onClick={button}
            style={{
            width: 15,
            height: 15,
            border: "1px solid gray",
            borderRadius: 999,
            backgroundColor: scrollIndex === num ? "black" : "transparent",
            transitionDuration: 1000,
            transition: "background-color 0.5s",
            }}>
        </button>
    );
};

const Dots = ({ scrollIndex }) => {
    return (
    <div style={{ position: "fixed", top: "50%", right: "4vh" }}>
        <div 
            style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: 20,
            height: 100,
            }}>

            <Dot num={1} scrollIndex={scrollIndex}></Dot>
            <Dot num={2} scrollIndex={scrollIndex}></Dot>
            <Dot num={3} scrollIndex={scrollIndex}></Dot>
            <Dot num={4} scrollIndex={scrollIndex}></Dot>
        </div>
    </div>
    );
};

export default Dots;