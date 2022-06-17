import React from "react"
import ReactPlayer from 'react-player'

import './style.css'

const N_FEATURED_PODCASTS = (props) => {
    return(
        <React.Fragment>        
            <div className="main_column">
                <div className="catagory_title">
                    <p>[ NineFruit ]</p>
                    <h1>FEATURED PODCASTS</h1>
                </div>
                
                <div className="video_row">
                    <div className="video_column">
                        <div className="video_box">
                            <div>
                                <ReactPlayer
                                    title='NineFruit_Youtube'
                                    className='react-player'
                                    url={props.url_1} 
                                    width='100%'
                                    height='100%'
                                    loading="lazy"
                                    controls />
                            </div>
                        
                            <center>
                                <h3>{props.Video1_Title}</h3>
                                <div>{props.Video1_Sub}</div>

                                <br/>
                                <a href={props.url_1}>
                                    WATCH NOW
                                </a>
                            </center>
                        </div>
                    </div>

                    <div className="video_column">
                        <div className="video_box">
                            <div>
                                <ReactPlayer
                                    title='NineFruit_Youtube'
                                    className='react-player'
                                    url={props.url_2} 
                                    width='100%'
                                    height='100%'
                                    loading="lazy"
                                    controls />
                            </div>
                        

                            <center>
                                <h3>{props.Video2_Title}</h3>
                                <div>{props.Video2_Sub}</div>

                                <br/>
                                <a href={props.url_2}>
                                    WATCH NOW
                                </a>
                            </center>
                        </div>
                    </div>

                    <div className="video_column">
                        <div className="video_box">
                            <div>
                                <ReactPlayer
                                    title='NineFruit_Youtube'
                                    className='react-player'
                                    url={props.url_3} 
                                    width='100%'
                                    height='100%'
                                    loading="lazy"
                                    controls />
                            </div>
                        

                            <center>
                                <h3>{props.Video3_Title}</h3>
                                <div>{props.Video3_Sub}</div>

                                <br/>
                                <a href={props.url_3}>
                                    WATCH NOW
                                </a>
                            </center>
                        </div>
                    </div>


                </div>
            </div>
            
        </React.Fragment>
    );
}

N_FEATURED_PODCASTS.defaultProps = {
    url_1 : 'https://youtu.be/0iOuf7x0ROY',
    url_2 : 'https://youtu.be/3H4sbJKG9NY',
    url_3 : 'https://youtu.be/PvB4VspQP9w',

    Video1_Title : '찬양을 알리다.',
    Video1_Sub : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',

    Video2_Title : '우리 때문에',
    Video2_Sub : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',

    Video3_Title : '주 나의 이름 부를때',
    Video3_Sub : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
}

export default N_FEATURED_PODCASTS;