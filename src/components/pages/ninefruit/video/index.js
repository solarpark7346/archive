import React, {Component} from 'react';
import ReactPlayer from 'react-player'

import './styles.css';

class VideoView extends Component {
    render() {
        return (
            <ReactPlayer
                title='NineFruit_Youtube'
                className='react-player'
                url={this.props.video.link} 
                width='100%'
                height='100%'
                loading="lazy"
                controls
            />
        );
    }
}

class Video extends Component {
    constructor(props) {
    super(props);
    
    this.state = {
        videoData: [
        { link : 'https://www.youtu.be/0iOuf7x0ROY' },
        { link : 'https://www.youtu.be/3H4sbJKG9NY' },
        { link : 'https://www.youtu.be/PvB4VspQP9w' },
        { link : 'https://www.youtu.be/5EDE7cLAFYo' },

        { link : 'https://www.youtu.be/3xwY-DSU1MQ' },
        { link : 'https://www.youtu.be/nys3DuzWzp0' },
        { link : 'https://www.youtu.be/Ge1mKCcJb90' },
        { link : 'https://www.youtu.be/k4Z-jcrsEDY' },
        ]
    };
    }
    
    render() {
        const mapToComponent = data => {
            return data.map((video, i) => {
                return (<VideoView video={video} key={i}/>);
            });
    };
    
    return (
        <>
            {mapToComponent(this.state.videoData)}
        </>
    );
    }
}

export default Video;
