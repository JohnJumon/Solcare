import Intro from './components/layout/home/intro';
import ConnectWallet from './components/layout/home/connectWallet';

const Home = () => {
    return (
        <main className="flex flex-col items-center">
            <Intro/>
            <ConnectWallet/>
        </main>
    );
};

export default Home;