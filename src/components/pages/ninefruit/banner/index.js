import React from 'react';

import banner from "../../../../assets/img/ninefruit/9F_Wallpaper_4K.jpg"

const N_banner = (props) => {
    return(
        <React.Fragment>
            <div className='main_column'>
                <img 
                    width="100%" 
                    height="100%" 
                    src={banner} 
                    alt="banner"
                    />
            </div>
        </React.Fragment>
    )
}

export default N_banner;
