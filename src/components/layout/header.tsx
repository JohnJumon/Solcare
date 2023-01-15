import { useCallback, useEffect, useState, useRef } from 'react';
import { Connection, clusterApiUrl } from '@solana/web3.js';
import Logo from '../../image/Logo.png';
import { Link } from 'react-router-dom';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { useWallet } from '@solana/wallet-adapter-react';
import axios from 'axios';
import { API_BASE_URL, LOGIN_MESSAGE } from '../../utils';
import base58 from 'bs58';
import { useSmartContract } from '../../context/connection';

const Header = () => {
    const { connected, signMessage, publicKey, disconnect } = useWallet();
    const { smartContract } = useSmartContract();

    const signIn = async () => {
        if (signMessage && publicKey) {
            try {
                const message = new TextEncoder().encode(LOGIN_MESSAGE);
                const signature = await signMessage(message);

                const resp = await axios.post(
                    API_BASE_URL + '/v1/users/login',
                    {
                        address: publicKey.toBase58(),
                        signedMessage: base58.encode(signature),
                    }
                );

                localStorage.setItem('token', resp.data.data.token);
            } catch (e) {
                console.log(e);
                await disconnect();
            }
        }
    };

    useEffect(() => {
        if (connected) {
            signIn();
        }
    }, [connected]);

    return (
        <div className="navbar sticky top-0 z-50 bg-white py-4 lg:px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/profile/my-campaign/create">
                                Buat Campaign
                            </Link>
                        </li>
                        <li>
                            <Link to="/explore">Cari Campaign</Link>
                        </li>
                    </ul>
                </div>
                <Link to="/">
                    <a className="pt-3 lg:pt-1 btn btn-ghost hover:bg-white hover:brightness-125 hidden sm:block">
                        <img
                            className="sm:w-[62.5px] sm:h-[20px] lg:w-[125px] lg:h-[40px]"
                            src={Logo}
                        />
                    </a>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='px-4'>
                        <Link to="/profile/my-campaign/create">
                            Buat Campaign
                        </Link>
                    </li>
                    <li>
                        <Link to="/explore">Cari Campaign</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <WalletMultiButton
                    style={{ backgroundColor: '#007BC7' }}
                    className="btn !text-xs lg:!h-16 lg:!text-lg capitalize !border-none !bg-[#007BC7]"
                />
            </div>
        </div>
    );
};

export default Header;
