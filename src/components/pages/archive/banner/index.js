import React from 'react';
import './style.css'

import logo_img from '../../../../assets/img/logo/archive_logo.png'

const A_banner = (props) => {
    return(
        <React.Fragment>
            <div 
                className='main_column'
                style={{
                    backgroundColor: 'rgb(48, 51, 54)',
                    color: 'white'
                }}
                >
                <img 
                    className='h_logo_img' src={logo_img}
                    style={{
                        border: '3px solid white'
                    }} />
                <p className='typing-text'>안녕하세요!</p>
                <span>사이트에 방문해 주셔서 감사합니다.</span>
                <span style={{fontSize: '0.6vw'}}>made by 박보성.</span>
            </div>
        </React.Fragment>
    )
}

export default A_banner;
