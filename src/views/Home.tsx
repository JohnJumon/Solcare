import Intro from '../components/layout/home/intro';
import ConnectWallet from '../components/layout/home/connectWallet';
import BestCampaigns from '../components/layout/home/bestCampaigns';

const Home = () => {
    return (
        <main className="flex flex-col items-center">
            <Intro />
            <ConnectWallet />
            <BestCampaigns />
        </main>
    );
};

export default Home;
