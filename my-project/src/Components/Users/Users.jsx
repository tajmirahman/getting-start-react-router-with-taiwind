import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {

    const users= useLoaderData();
    console.log(users);

    
    return (
        <div>
            <h1 className="text-2xl font-bold mb-10">All Users- {users.length}</h1>

            <div className="grid md:grid-cols-3 gap-4">
                {
                    users.map(user=> <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;