import { WalletProvider } from '@solana/wallet-adapter-react';
import { ConnectionProvider } from './context/connection';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useMemo } from 'react';
import Footer from './components/footer';
import Header from './components/layout/header';
import { ToastContainer } from 'react-toastify';

function App(props: any) {
    const wallets = useMemo(
        () => [new PhantomWalletAdapter()],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    return (
        <>
            <ConnectionProvider>
                <WalletProvider wallets={wallets} autoConnect>
                    <WalletModalProvider>
                        <Header />
                        {props.children}
                        <Footer />
                    </WalletModalProvider>
                </WalletProvider>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </ConnectionProvider>
        </>
    );
}

export default App;
