import Footer from "../Footer/Footer";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";


const Home = () => {
    return (
        <div>

            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Home;