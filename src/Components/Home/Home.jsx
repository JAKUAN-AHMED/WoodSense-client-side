import Banner from "../Banner/Banner";
import CraftItems from "../CraftItems/CraftItems";
import LatestWork from "../LatestWork/LatestWork";
import Navbar from "../Shared/Navbar";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <CraftItems></CraftItems>
            <LatestWork></LatestWork>
        </div>
    );
};

export default Home;