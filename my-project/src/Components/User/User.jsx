import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


const User = ({ user }) => {

    const { id, name, email, phone } = user;

    const navigate = useNavigate();

    const handleShowDetails = () => {
        navigate(`/user/${id}`);
    }




    return (
        <div className="border-2 border-black text-clip p-2">
            <h2 className="text-2xl font-bold">Name- {name}</h2>
            <p>Email- {email}</p>
            <p>Phone- {phone}</p>
            <Link className="underline" to={`/user/${id}`}>Show Details</Link><br />
            <button onClick={handleShowDetails} className="px-2 py-2 border-2 border-r-amber-100">Show Details</button>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
}

export default User;