import { Link } from 'react-router-dom';
import '../Styles/MobileMenu.css';
import { FaLocationDot } from 'react-icons/fa6';

const MobileMenu = () =>{
    return(
        <div className='menu-desktop menu-mobile'>
        <ul className='navbar__sides navbar__sides-left'>
            <li>
                <Link to='/menu'>MENU</Link>
            </li>
            <li>
                <Link to='*'>REWARDS</Link>
            </li>              
        </ul>
        <ul className='navbar__sides navbar__sides-right'>
            <li id='location'>
                <FaLocationDot className='location-icon'/>
                <Link to='/stores'>
                    Localizar Tienda
                </Link>
            </li>
            <li id='btn-login'>
                <Link to='/login'>Ingresar</Link>
            </li>
            <li id='btn-register'>
                <Link to='/register'>Únete</Link>
            </li>
        </ul>
    </div>
    )
}

export default MobileMenu;