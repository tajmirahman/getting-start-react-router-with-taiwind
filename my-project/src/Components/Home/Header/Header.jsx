import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className="mb-10">
            <nav className="text-3xl">
                <NavLink className={'mr-3'} to={'/'}>Home</NavLink>
                <NavLink className={'mr-3'} to={'/users'}>Users</NavLink>
                
                <NavLink className={'mr-3'} to={'/about'}>Abouts</NavLink>
                <NavLink className={'mr-3'} to={'/contact'}>Contact Us</NavLink>
                
            </nav>
        </div>
    );
};

export default Header;