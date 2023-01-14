import React from 'react';
import { useState } from 'react';
import MainProfile from './mainProfile';
import CampaignList from './campaignList';
import HistoryTransaction from './historyTransaction';
import AccountSetting from './accountSetting';
import CreateCampaign from './createCampaign';
import DetailCampaign from './detailCampaign';

interface ProfileContentProps {
    page: string;
}
const ProfileContent: React.FC<ProfileContentProps> = (props) => {
    const generatePage = () => {
        if (props.page === 'Profil') {
            return <MainProfile />;
        } else if (props.page === 'Campaign Anda') {
            return <CampaignList />;
        } else if (props.page === 'Buat Campaign') {
            return <CreateCampaign />;
        } else if (props.page === 'Detail Campaign') {
            return <DetailCampaign status={' '} />;
        } else if (props.page === 'Riwayat Transaksi') {
            return <HistoryTransaction />;
        } else {
            return <AccountSetting />;
        }
    };
    return (
        <div>
            {generatePage()}
        </div>
    );
};
export default ProfileContent;
