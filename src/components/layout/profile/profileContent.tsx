import React from "react";
import MainProfile from "./mainProfile";
import CampaignList from "./campaignList";
import HistoryTransaction from "./historyTransaction";
import AccountSetting from "./accountSetting";

interface ProfileContentProps {
    handleClick: () => void
    page: string
}
const ProfileContent: React.FC<ProfileContentProps> = (props) => {
    const generatePage = () => {
        if(props.page === "Profil"){
            return <MainProfile/>
        }
        else if(props.page === "Campaign Anda"){
            return <CampaignList/>
        }
        else if(props.page === "Riwayat Transaksi"){
            return <HistoryTransaction/>
        }
        else {
            return <AccountSetting/>
        }
    }
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row items-center mb-2">
                <button onClick={props.handleClick} className="drawer-button lg:hidden p-0 m-2 ml-0 bg-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-[#007BC7] inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
                <h1 className="font-bold text-2xl lg:hidden text-[#007BC7]">{props.page}</h1>
            </div>
            {generatePage()}
        </div>
    );
};
export default ProfileContent;