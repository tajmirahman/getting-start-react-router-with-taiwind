import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id,name,email,phone}= user;
    return (
        <div className="border-2 border-black text-clip p-2">
            <h2 className="text-2xl font-bold">Name- {name}</h2>
            <p>Email- {email}</p>
            <p>Phone- {phone}</p>
            <Link className="underline"  to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;