import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_BASE_URL, USDC_DECIMALS } from '../../../utils';
import CampaignCard from './card/campaignCard';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useSmartContract } from '../../../context/connection';
import { BN } from 'bn.js';

interface CampaignInfo {
    address: string;
    title: string;
    description: string;
    banner: string;

    target: number;
    collected: number;

    createdAt: number;
    duration: number;
}

const CampaignList = () => {
    const [allCampaigns, setAllCampaigns] = useState<CampaignInfo[]>();

    const [searchParams, setSearchParams] = useSearchParams();

    const [initializing, setInitializing] = useState(true);

    const { smartContract } = useSmartContract();

    let category = searchParams.get('categoryId');
    if (!category) {
        category = '';
    }
    let filter = searchParams.get('order');
    if (!filter) {
        filter = 'newest';
    }

    let search = searchParams.get('search');
    if (!search) {
        search = '';
    }

    const fetchAllCampaign = async () => {
        const response = await axios.get(
            API_BASE_URL +
                '/v1/campaign?' +
                `categoryId=${category}&order=${filter}&search=${search}`
        );
        const responseData = response.data.data;
        const campaigns: CampaignInfo[] = [];

        for (let i = 0; i < (responseData?.length || 0); i++) {
            const e = responseData[i];
            const campaign = await smartContract.account.campaign.fetchNullable(
                e.address
            );
            if (!campaign) return;

            const data: CampaignInfo = {
                address: e.address,
                title: e.title,
                description: e.description,
                banner: e.banner,

                target: campaign.targetAmount
                    .div(new BN(Math.pow(10, USDC_DECIMALS)))
                    .toNumber(),
                collected: campaign.fundedAmount
                    .div(new BN(Math.pow(10, USDC_DECIMALS)))
                    .toNumber(),

                createdAt: campaign.createdAt.toNumber(),
                duration: campaign.heldDuration.toNumber(),
            };

            campaigns.push(data);
        }

        setInitializing(false);
        setAllCampaigns(campaigns);
    };

    const location = useLocation();

    useEffect(() => {
        fetchAllCampaign();
    }, [location]);

    if (initializing === true) {
        return <progress className="progress w-[90%] flex mx-auto my-20" />;
    }

    const content =
        allCampaigns?.length === 0 ? (
            <p>Belum ada campaign</p>
        ) : (
            <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
                {allCampaigns?.map((campaign) => {
                    return (
                        <div className="gap-6 mt-6">
                            <CampaignCard campaign={campaign} />
                        </div>
                    );
                })}
            </div>
        );
    return <>{content}</>;
};

export default CampaignList;
