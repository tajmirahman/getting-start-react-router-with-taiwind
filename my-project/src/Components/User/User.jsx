

const User = ({user}) => {
    const {name,email,phone}= user;
    return (
        <div className="border-2 border-black text-clip p-2">
            <h2 className="text-2xl font-bold">Name- {name}</h2>
            <p>Email- {email}</p>
            <p>Phone- {phone}</p>
        </div>
    );
};

export default User;