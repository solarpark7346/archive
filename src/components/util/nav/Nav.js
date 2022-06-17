import { Link } from 'react-router-dom';

import archive_logo_img from '../../../assets/img/logo/archive_logo.png'
import ninefruit_logo_img from '../../../assets/img/logo/ninefruit_logo.jpg'

const Navbar = () => {
    return (
    <div 
        style={{
            display: "flex",
            position: "fixed",
            flexDirection: "row",
            width: '99%',
            padding: "1% 0",
            gap: 10,
            justifyContent: "end",
            zIndex: 99,
        }}>

        <Link to="/archive">
            HOME
        </Link>

        <Link to="/archive/main">
            <img className='nav_logo_img' src={archive_logo_img} />
        </Link>

        <Link to="/archive/main/ninefruit">
            <img className='nav_logo_img' src={ninefruit_logo_img} />
        </Link>

    </div>
    );
};

export default Navbar;