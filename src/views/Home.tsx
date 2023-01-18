import Intro from '../components/layout/home/intro';
import ConnectWallet from '../components/layout/home/connectWallet';
import BestCampaigns from '../components/layout/home/bestCampaigns';
import Campaigns from '../components/layout/home/campaigns';
import { useWallet } from '@solana/wallet-adapter-react';

const Home = () => {
    const { connected, publicKey } = useWallet();

    return (
        <main className="flex flex-col items-center">
            <Intro />
            {connected ? (
                <>
                    <Campaigns type="Voting" />
                    <Campaigns type="Helped" />
                </>
            ) : (
                <ConnectWallet />
            )}
            <BestCampaigns />
        </main>
    );
};

export default Home;
