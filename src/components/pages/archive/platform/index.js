import React from 'react';
import { Link } from 'react-router-dom';

import archive_logo_img from '../../../../assets/img/logo/archive_logo.png'
import ninefruit_logo_img from '../../../../assets/img/logo/ninefruit_logo.jpg'

const A_platform = (props) => {
    return(
        <React.Fragment>
            <div className='main_row'>
                <div>
                    <img className='h_logo_img' src={archive_logo_img} />
                    <center>
                        <h3>아카이브</h3>
                    </center>
                </div>
                
                <div>
                    <Link to="/archive/main/ninefruit">
                        <img className='h_logo_img' src={ninefruit_logo_img} />
                    </Link>

                    <center>
                        <h3>나인프루트</h3>
                    </center>
                </div>                
            </div>
        </React.Fragment>
    )
}

export default A_platform;
