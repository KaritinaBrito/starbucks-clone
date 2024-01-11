import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import '../Styles/Navbar.css';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    return(
        <header>
        <Link to='/'><img src="https://www.starbucks.com.mx/static/images/logo.svg" alt="logo starcbuks" className='logo'/></Link>
        <nav className={`navbar ${clicked ? 'active' : ''}`}>
                <ul className='navbar__sides navbar__sides-left'>
                    <li>
                        <Link to='/menu'>MENU</Link>
                    </li>
                    <li>
                        <Link to='*'>REWARDS</Link>
                    </li>              
                </ul>
                <span></span>
                <ul className='navbar__sides navbar__sides-right'>
                    <li id='location'>
                        <FaLocationDot className='location-icon'/>
                        <Link to='/stores'>
                            Localizar Tienda
                        </Link>
                    </li>
                    <div className='navbar__sides-right-btns'>
                        <li id='btn-login'>
                            <Link to='/login'>Ingresar</Link>
                        </li>
                        <li id='btn-register'>
                            <Link to='/register'>Únete</Link>
                        </li>
                    </div>
                </ul>
        </nav>
        <div className={`option-mobile ${!clicked ? 'active': ''}`}>
            <FaBars  onClick={()=> setClicked(!clicked)}/>
        </div>
        <div className={`option-mobile ${clicked ? 'active' : ''}`}>
            <MdClose onClick={()=> setClicked(!clicked)}/>
        </div>
    </header>
    )
}

export default Navbar;