import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { API_BASE_URL } from "../../../../../utils";

const ValidationActions = (props:any) => {
    const campaignData = props.campaignData;
    const refetch = props.refetch;

    const verifyEvidence = async (isApproved:boolean) => {
        let token = localStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const resp = await axios.post(
            `${API_BASE_URL}/v1/campaign/evidence/verify`,
            {
                address: campaignData.address,
                isApproved: isApproved
            }
            ,{ headers }
        );
        if (resp.data.status !== 200) {
            toast.error(`Verifikasi proyek gagal dilakukan. Silahkan coba kembali.`);
            return;
        }
        if(isApproved){
            toast.success('Proyek dinyatakan sudah berhasil!');
        }
        else{
            toast.success('Proyek dinyatakan gagal.')
        }
        
        refetch();
    }
    return (
        <div className="flex flex-row justify-center">
            <button className="hover:stroke-[#007BC7] stroke-black" onClick={()=>verifyEvidence(true)}>
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
            <button className="ml-2 hover:stroke-[#007BC7] stroke-black" onClick={()=>verifyEvidence(false)}>
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

export default ValidationActions;
