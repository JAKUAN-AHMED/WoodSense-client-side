import Banner from "../Banner/Banner";
import CraftItems from "../CraftItems/CraftItems";
import HappyClients from "../HappyClients/HappyClients";
import LatestWork from "../LatestWork/LatestWork";
import Navbar from "../Shared/Navbar";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <CraftItems></CraftItems>
            <LatestWork></LatestWork>
            <HappyClients></HappyClients>
        </div>
    );
};

export default Home;