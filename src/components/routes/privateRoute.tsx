import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { decodeJwt } from 'jose';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../utils';
import axios from 'axios';
import base58 from 'bs58';
import { now } from '../../utils';
import { LOGIN_MESSAGE } from '../../utils';
import { publicKey } from '@project-serum/anchor/dist/cjs/utils';
const PrivateRoute = (props: any) => {
    const { connected, publicKey, disconnecting } = useWallet();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (connected) {
            const tokenString = localStorage.getItem('token');
            if (tokenString) {
                const tokenDetail = decodeJwt(tokenString);
                if (typeof tokenDetail.isAdmin == 'boolean') {
                    setIsAdmin(tokenDetail.isAdmin);
                }
            }
        }
    }, [connected, disconnecting, publicKey]);

    return (
        <>
            {props.forAdmin ? (
                connected ? (
                    isAdmin ? (
                        props.children
                    ) : (
                        <div className="min-h-[70vh] flex flex-wrap flex-col content-center justify-center bg-gray-100">
                            <p className="text-xl text-center px-8">
                                Anda Tidak Punya Akses di Halaman Ini
                            </p>
                        </div>
                    )
                ) : (
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
                )
            ) : connected ? (
                props.children
            ) : (
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
            )}
        </>
    );
};

export default PrivateRoute;
