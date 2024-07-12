import { Outlet } from "react-router-dom";
import Home from "../Components/Home/Home";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto font-popins">
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;