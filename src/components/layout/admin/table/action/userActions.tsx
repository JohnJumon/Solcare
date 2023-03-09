import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../../../../utils';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
const UserActions = (props: any) => {
    const [userData, setUserData] = useState(props.data);
    // console.log(userData); 

    const fetchUser = async () => {
        const resp = await axios.get(
            `${API_BASE_URL}/v1/users/info/${userData.address}`
        );

        if (resp.data.status === 200) {
            setUserData(resp.data.data);
        }
    };

    const removeVerification = async () => {
        let token = localStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const resp = await axios.delete(
            `${API_BASE_URL}/v1/admins/kyc/${userData.address}`, { headers }
        );
        if (resp.data.status !== 200) {
            toast.error(`Verifikasi gagal dicabut. Silahkan coba kembali.`);
            return;
        }
        toast.success('Verifikasi berhasil dicabut.');
        fetchUser();
    }
    return (
        <div className="flex flex-row justify-center">
            <Link
                to={`/admin/manage-user/detail/${userData.address}`}
                className="hover:stroke-[#007BC7] stroke-black"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.5 25C20.299 25 25 20.299 25 14.5C25 8.70101 20.299 4 14.5 4C8.70101 4 4 8.70101 4 14.5C4 20.299 8.70101 25 14.5 25Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M21.9238 21.9248L27.9989 27.9999"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </Link>

            {userData.isVerified === true ? (
                <button className="ml-2 hover:stroke-[#007BC7] stroke-black" onClick={() => removeVerification()}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M25 7L7 25"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M25 25L7 7"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            ) : (
                <></>
            )}
        </div>
    );
};

export default UserActions;
