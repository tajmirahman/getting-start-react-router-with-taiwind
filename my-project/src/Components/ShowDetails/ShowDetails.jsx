import { Link, useLoaderData, useNavigate } from "react-router-dom";


const ShowDetails = () => {

    const navigate= useNavigate();

    const handleGoBack=()=>{
        navigate(-1);
    }

    const user= useLoaderData();

    return (
        <div>
            <h1 className="text-2xl">{user.name}</h1>
            <p className="mb-5">{user.website}</p>
            <Link ><button onClick={handleGoBack} className="px-2 py-2 border-2 border-r-gray-100">Go Back</button></Link>
        </div>
    );
};

export default ShowDetails;