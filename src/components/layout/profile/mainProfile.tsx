import { getAssociatedTokenAddressSync } from '@solana/spl-token';
import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfilePlaceholder from '../../../image/profilePic.png';
import { API_BASE_URL, USDC_DECIMALS, USDC_MINT } from '../../../utils';
import * as spl from '@solana/spl-token';
import { useSmartContract } from '../../../context/connection';
import { BN } from 'bn.js';
import axios from 'axios';

interface ProfileProps {
    firstName: string;
    lastName: string;
    address: string;
    profilePicture: string;
    gender: string;

    createdAt: number;
    isVerified: boolean;
    isWarned: boolean;
}

const MainProfile = () => {
    const { connected, publicKey } = useWallet();
    const { smartContract } = useSmartContract();
    const [usdcBalance, setUsdcBalance] = useState(0);
    const [createdCampaign, setCreatedCampaign] = useState(0);
    const [userInfo, setUserInfo] = useState<ProfileProps>();

    const fetchUsdc = async () => {
        if (!connected || !publicKey) return;

        const tokenAccountAddress = getAssociatedTokenAddressSync(
            USDC_MINT,
            publicKey
        );
        const tokenAccountInfo =
            await smartContract.provider.connection.getAccountInfo(
                tokenAccountAddress
            );

        const list = await axios.get(
            API_BASE_URL + '/v1/campaign/user/' + publicKey.toBase58()
        );
        setCreatedCampaign(list.data.data.length);

        if (tokenAccountInfo !== null) {
            const tokenInfo = spl.unpackAccount(
                tokenAccountAddress,
                tokenAccountInfo
            );
            const amount = new BN(tokenInfo.amount.toString())
                .div(new BN(Math.pow(10, USDC_DECIMALS)))
                .toNumber();
            setUsdcBalance(amount);
        }
    };

    const fetchUser = async () => {
        const userData = await axios.get(
            `${API_BASE_URL}/v1/users/info/${publicKey?.toBase58()}`
        );
        if (userData.data.data != undefined) {
            setUserInfo(userData.data.data);
        }
    };

    useEffect(() => {
        fetchUsdc();
        fetchUser();
    }, []);

    if (userInfo !== undefined) {
        return (
            <div className="flex flex-col">
                <div
                    className="
                    flex flex-col
                    md:flex-row items-center shadow-[0px_4px_6px_2px_rgba(0,123,199,0.5)] p-8 rounded-[10px]"
                >
                    <img
                        className="
                            md:basis-1/12 w-24 h-24 rounded-full
                            md:w-28 md:h-28"
                        src={
                            userInfo.profilePicture === ''
                                ? ProfilePlaceholder
                                : userInfo.profilePicture
                        }
                        alt="placeholder"
                    />
                    <div className="md:basis-10/12 flex flex-col items-center md:items-start my-4 md:my-0 md:mx-4">
                        <h2
                            className="text-lg font-bold
                            md:text-xl"
                        >
                            {userInfo.firstName === '' ||
                            userInfo.firstName === ''
                                ? 'Nama'
                                : userInfo.firstName + ' ' + userInfo.lastName}
                        </h2>
                        <p
                            id="address-tag"
                            className="text-sm
                            md:text-base"
                        >
                            {connected
                                ? publicKey?.toBase58()
                                : 'Wallet address'}
                        </p>
                        <p
                            className="text-sm
                            md:text-base"
                        >
                            {userInfo.gender ? 'Pria' : 'Perempuan'}
                        </p>
                        <p
                            className="text-sm
                            md:text-base"
                        >
                            {userInfo.isVerified
                                ? 'Terverifikasi'
                                : 'Belum Terverifikasi'}
                        </p>
                    </div>
                    <p
                        className="text-center text-sm 
                        md:self-start md:text-right md:basis-1/12
                        "
                    >
                        {userInfo.isWarned ? (
                            <p className="text-red-600 text-bold">
                                Diperingati
                            </p>
                        ) : (
                            <p className="text-green-600 text-bold">
                                Belum Diperingati
                            </p>
                        )}
                    </p>
                </div>
                <div className="divider"></div>
                <p className="text-left font-bold text-xs sm:text-lg mb-2 sm:mb-4">
                    Saldo Saat Ini
                </p>
                <div className="font-bold shadow-[0px_4px_6px_2px_rgba(0,123,199,0.5)] p-4 rounded-[10px] mb-6 text-center">
                    <p className="text-[#007BC7] text-3xl sm:text-6xl">
                        {usdcBalance.toLocaleString().replaceAll(',', '.')}
                        <span className="text-3xl max-[639px]:hidden">
                            USDC
                        </span>
                    </p>
                    <p className="sm:hidden text-[15px] text-[#007BC7]">USDC</p>
                </div>
                <div className="grid grid-cols-1 gap-6 font-bold text-xs sm:text-lg md:grid-cols-2 md:grid-rows-2 md:gap-4 items-center">
                    <div className="col-span-1">
                        <p>Total Donasi</p>
                        <div className="text-3xl">
                            <p>xx</p>
                            <p className="text-[15px] leading-none">USDC</p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <p>Total Pendapatan</p>
                        <div className="text-3xl">
                            <p>xx</p>
                            <p className="text-[15px] leading-none">USDC</p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <p>Campaign Yang Didonasi</p>
                        <div className="text-3xl">
                            <p>xx</p>
                            <p className="text-[15px] leading-none">Campaign</p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <p>Campaign Yang Dibuat</p>
                        <div className="text-3xl">
                            <p>{createdCampaign}</p>
                            <p className="text-[15px] leading-none">Campaign</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
    return <></>;
};

export default MainProfile;
