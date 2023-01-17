import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../../utils';
import CampaignCard from './card/campaignCard';

const CampaignList = () => {
    const [allCampaigns, setAllCampaigns] = useState([]);

    const fetchAllCampaign = async () => {
        const response = await axios.get(API_BASE_URL + '/v1/campaign');
        const responseData = response.data.data;
        setAllCampaigns(responseData);
    };

    useEffect(() => {
        fetchAllCampaign();
    }, []);

    let content = allCampaigns.map((campaign) => {
        return (
            <div className="gap-6 mt-6">
                <CampaignCard campaign={campaign} />
            </div>
        );
    });

    return <>{content}</>;
};

export default CampaignList;
