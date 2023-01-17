import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../../utils';
import CampaignCard from './card/campaignCard';
import { useSearchParams, useLocation } from 'react-router-dom';

const CampaignList = () => {
    const [allCampaigns, setAllCampaigns] = useState([]);
    const [allCampaignsFilter, setAllCampaignsFilter] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();
    let category = searchParams.get('categoryId');
    if (category === null) {
        category = '0';
    }
    let filter = searchParams.get('order');
    if (filter === null) {
        filter = 'newest';
    }
    let search = searchParams.get('search');

    const fetchAllCampaign = async () => {
        const responseCampaign = await axios.get(API_BASE_URL + '/v1/campaign');
        const responseDataCampaign = responseCampaign.data.data;
        setAllCampaigns(responseDataCampaign);

        const responseCampaignFilter = await axios.get(
            API_BASE_URL +
                '/v1/campaign?' +
                `categoryId=${category}&order=${filter}` +
                (search !== 'null' ? `&search=${search}` : '')
        );
        const responseDataCampaignFilter = responseCampaignFilter.data.data;
        console.log(responseDataCampaignFilter);

        setAllCampaignsFilter(responseDataCampaignFilter);
    };

    const location = useLocation();

    useEffect(() => {
        fetchAllCampaign();
    }, [location]);

    let content =
        allCampaignsFilter.length === 0 ? (
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
            )
        ) : (
            allCampaignsFilter.map((campaign) => {
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
