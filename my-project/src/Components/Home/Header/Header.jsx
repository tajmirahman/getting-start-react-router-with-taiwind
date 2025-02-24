import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="mb-10">
            <nav className="text-3xl">
                <Link className="mr-3 " to={'/'}>Home</Link>
                <Link className="mr-3 underline" to={'/users'}>Users</Link>
                <Link className="mr-3 underline" to={'/about'}>Abouts</Link>
                <Link className="mr-3 underline" to={'/contact'}>Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;