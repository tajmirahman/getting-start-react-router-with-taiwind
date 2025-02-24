import { useLoaderData } from "react-router-dom";


const ShowDetails = () => {

    const user= useLoaderData();

    return (
        <div>
            <h1 className="text-2xl">{user.name}</h1>
            <p>{user.website}</p>
        </div>
    );
};

export default ShowDetails;