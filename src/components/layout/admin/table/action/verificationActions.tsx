import axios from 'axios';
import { toast } from 'react-toastify';
import { API_BASE_URL } from '../../../../../utils';

const VerificationActions = (props: any) => {
    const userData = props.userData;
    const refetch = props.refetch;

    const acceptKYC = async () => {
        let token = localStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        const resp = await axios.post(
            `${API_BASE_URL}/v1/admins/kyc`,
            {
                address: userData.usersWalletAddress,
                isAccepted: true,
            },
            { headers }
        );

        if (resp.data.status !== 200) {
            toast.error(`Verifikasi gagal disetujui. Silahkan coba kembali.`);
            return;
        }
        toast.success('Permintaan verifikasi berhasil disetujui');
        refetch();
    };

    const declineKYC = async () => {
        let token = localStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const resp = await axios.post(
            `${API_BASE_URL}/v1/admins/kyc`,
            {
                address: userData.usersWalletAddress,
                isAccepted: false,
            },
            { headers }
        );
        if (resp.data.status !== 200) {
            toast.error(`Verifikasi gagal ditolak. Silahkan coba kembali.`);
            return;
        }
        toast.success('Permintaan verifikasi berhasil ditolak');
        refetch();
    };

    return (
        <div className="flex flex-row justify-center">
            <button
                className="hover:stroke-[#007BC7] stroke-black"
                onClick={() => acceptKYC()}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M27 9.00073L13 23.0001L6 16.0007"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <button
                className="ml-2 hover:stroke-[#007BC7] stroke-black"
                onClick={() => declineKYC()}
            >
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
        </div>
    );
};

export default VerificationActions;
