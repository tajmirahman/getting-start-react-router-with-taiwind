import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error= useRouteError();
    console.log(error);

    return (
        <div className="just">
            <h1>Oops !!! page</h1>
            <h2>{error.status}</h2>
            <p className="mb-10">{error.statusText}</p>
            
            <Link to={'/'}><button className="border-2 border-red-100">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;