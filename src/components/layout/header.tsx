import { useEffect, useState } from 'react';
import { Connection, clusterApiUrl } from '@solana/web3.js';
import Logo from '../../image/Logo.png';
import { Link } from 'react-router-dom';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

const Header = () => {
    const connection = new Connection(clusterApiUrl('devnet'));

    const [time, setTime] = useState(0);

    useEffect(() => {
        connection.onSlotChange(async (slot) => {
            setTime((await connection.getBlockTime(slot.slot)) || 0);
        });
    }, []);

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
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                </svg>
                            </a>
                            <ul className="p-2">
                                <li>
                                    <a>Submenu 1</a>
                                </li>
                                <li>
                                    <a>Submenu 2</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>Item 3</a>
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
                    <li>
                        <Link to="/profile">Buat Campaign</Link>
                    </li>
                    <li>
                        <Link to="/explore">Cari Campaign</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <WalletMultiButton
                    style={{ backgroundColor: '#007BC7' }}
                    className="btn text-xs lg:text-xl capitalize border-none bg-[#007BC7]"
                />
            </div>
        </div>
    );
};

export default Header;
