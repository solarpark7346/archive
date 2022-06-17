import React from "react"

const IMG_PAGE = (props) => {

    React.useEffect(() => {
        console.log("img value :", props);
    })

    return(
        <React.Fragment>
            <div className='main_column'>
                <img width="80%" src={props.img} alt="img" />
            </div>
        </React.Fragment>
    );
}

export default IMG_PAGE;