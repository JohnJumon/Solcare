import { useWallet } from '@solana/wallet-adapter-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProfilePlaceholder from '../../../image/profilePic.png';
import { API_BASE_URL } from '../../../utils';
import KYC from './kyc';
import SetInfo from './setInfo';

interface ProfileProps {
    firstName: string;
    lastName: string;
    address: string;
    profilePicture: string;
    gender: boolean;
    email: string;

    createdAt: number;
    isVerified: boolean;
    isWarned: boolean;
}

const AccountSetting = () => {
    const { connected, publicKey } = useWallet();
    const [userInfo, setUserInfo] = useState<ProfileProps>();

    const fetchUser = async () => {
        const userData = await axios.get(
            `${API_BASE_URL}/v1/users/info/${publicKey?.toBase58()}`
        );
        if (userData.data.data != undefined) {
            setUserInfo(userData.data.data);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    if (userInfo === undefined) {
        return null;
    }

    return (
        <div className="flex flex-col">
            <div
                className="
                flex flex-col
                md:flex-row items-center shadow-[0px_4px_6px_2px_rgba(0,123,199,0.5)] p-8 rounded-[10px] py-8"
            >
                <label
                    htmlFor="dropzone-file"
                    className={`shrink-0 md:h-28 md:w-28 h-24 w-24 bg-[url('${ProfilePlaceholder}')] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-full cursor-pointer hover:brightness-90`}
                >
                    <svg
                        aria-hidden="true"
                        className="w-10 h-10 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                    </svg>
                    <input id="dropzone-file" type="file" className="hidden" />
                </label>
                <div className="basis-10/12 shrink flex flex-col items-center md:items-start my-4 md:my-0 md:mx-4">
                    <p
                        className="text-sm
                            md:text-base"
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

                    <div className="divider my-1" />

                    <h2
                        className="text-lg font-bold
                        md:text-xl"
                    >
                        {userInfo.firstName === '' || userInfo.firstName === ''
                            ? 'Nama'
                            : userInfo.firstName + ' ' + userInfo.lastName}
                    </h2>
                    <p
                        id="address-tag"
                        className="text-sm
                        md:text-base"
                    >
                        {connected ? publicKey?.toBase58() : 'Wallet address'}
                    </p>
                    <p
                        className="text-sm
                            md:text-base"
                    >
                        {userInfo.email === '' ? '-' : userInfo.email}
                    </p>
                    <p
                        className="text-sm
                            md:text-base"
                    >
                        {userInfo.gender ? 'Pria' : 'Perempuan'}
                    </p>
                </div>
                <p
                    className="basis-1/12 shrink-0 text-center text-xs 
                    md:self-start md:text-right md:text-sm text-gray-500
                    "
                >
                    {userInfo.isVerified
                        ? 'Terverifikasi'
                        : 'Belum Terverifikasi'}
                </p>
            </div>
            <div className="divider"></div>
            <KYC />
            <SetInfo
                refetch={fetchUser}
                email={userInfo.email}
                firstName={userInfo.firstName}
                gender={userInfo.gender}
                lastName={userInfo.lastName}
            />
        </div>
    );
};

export default AccountSetting;
