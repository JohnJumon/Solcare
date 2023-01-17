import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../../utils';
import CampaignCard from './card/campaignCard';
import { useSearchParams, useLocation } from 'react-router-dom';

const CampaignList = () => {
    const [allCampaigns, setAllCampaigns] = useState([]);

    const [ searchParams, setSearchParams ] = useSearchParams();
    let category = searchParams.get('categoryId');
    let filter = searchParams.get('order');
    let search = searchParams.get('search');

    const fetchAllCampaign = async () => {
        const response = await axios.get(API_BASE_URL + '/v1/campaign?' + `categoryId=${category}&order=${filter}`);
        const responseData = response.data.data;
        setAllCampaigns(responseData);
    };

    const location = useLocation();

    useEffect(() => {
        fetchAllCampaign();
    }, [location]);

    let content =
        allCampaigns.length === 0 ? (
            <p>Belum ada campaign</p>
        ) : (
            allCampaigns.map((campaign) => {
                return (
                    <div className="gap-6 mt-6">
                        <CampaignCard campaign={campaign} />
                    </div>
                );
            })
        );

    return <>{content}</>;
};

export default CampaignList;
