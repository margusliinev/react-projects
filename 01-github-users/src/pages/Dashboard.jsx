import loadingImage from '../images/preloader.gif';
import Info from '../components/Info';
import Navbar from '../components/Navbar';
import Repos from '../components/Repos';
import Search from '../components/Search';
import User from '../components/User';

const Dashboard = () => {
    return (
        <main>
            <Navbar />
            <Search />
            <Info />
            <User />
            <Repos />
        </main>
    );
};

export default Dashboard;
