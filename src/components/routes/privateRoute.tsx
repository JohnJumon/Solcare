import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { decodeJwt } from 'jose';

const PrivateRoute = (props: any) => {
    const { connected } = useWallet();

    if (props.forAdmin) {
        if (connected) {
            const tokenString = localStorage.getItem('token');
            if (tokenString) {
                const tokenDetail = decodeJwt(tokenString);
                if (tokenDetail.isAdmin) {
                    return props.children;
                } else {
                    return (
                        <div className="min-h-[70vh] flex flex-wrap flex-col content-center justify-center bg-gray-100">
                            <p className="text-xl text-center px-8">
                                Anda Tidak Punya Akses di Halaman Ini
                            </p>
                        </div>
                    );
                }
            } else {
                return (
                    <div className="min-h-[70vh] flex flex-wrap flex-col content-center justify-center bg-gray-100">
                        <p className="text-xl text-center px-8">
                            Silahkan Refresh Halaman Ini Untuk Mengakses
                        </p>
                    </div>
                );
            }
        } else {
            return (
                <div className="min-h-[70vh] flex flex-wrap flex-col content-center justify-center bg-gray-100">
                    <p className="text-xl text-center px-8">
                        Silahkan Hubungkan Wallet Terlebih Dahulu
                    </p>
                    <WalletMultiButton
                        style={{ backgroundColor: '#007BC7' }}
                        className="btn !text-xs capitalize !bg-[#007BC7] !rounded-[5px] !h-12 xl:!h-16 !w-[11rem] xl:!rounded-[10px] xl:!w-[22rem] xl:!text-xl mx-auto mt-5"
                    >
                        Hubungkan Wallet
                    </WalletMultiButton>
                </div>
            );
        }
    } else {
        if (connected) {
            return props.children;
        } else {
            return (
                <div className="min-h-[70vh] flex flex-wrap flex-col content-center justify-center bg-gray-100">
                    <p className="text-xl text-center px-8">
                        Silahkan Hubungkan Wallet Terlebih Dahulu
                    </p>
                    <WalletMultiButton
                        style={{ backgroundColor: '#007BC7' }}
                        className="btn !text-xs capitalize !bg-[#007BC7] !rounded-[5px] !h-12 xl:!h-16 !w-[11rem] xl:!rounded-[10px] xl:!w-[22rem] xl:!text-xl mx-auto mt-5"
                    >
                        Hubungkan Wallet
                    </WalletMultiButton>
                </div>
            );
        }
    }
};

export default PrivateRoute;
