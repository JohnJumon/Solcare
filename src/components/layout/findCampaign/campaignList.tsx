import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_BASE_URL, PROPOSAL_SEED, USDC_DECIMALS } from '../../../utils';
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
    const [allCampaigns, setAllCampaigns] = useState<CampaignInfo[]>([]);

    const [searchParams, setSearchParams] = useSearchParams();

    const [initializing, setInitializing] = useState(true);

    const [ prevCategory, setPrevCategory ] = useState<String | null>();
    const [ prevFilter, setPrevFilter ] = useState<String | null>();
    const [ prevSearch, setPrevSearch ] = useState<String | null>();

    const [offset, setOffset] = useState(0);

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
            `categoryId=${category}&order=${filter}&search=${search}&offset=${offset}`
        );
        const responseData = response.data.data;
        const campaigns: CampaignInfo[] = [];

        for (let i = 0; i < (responseData?.length || 0); i++) {
            const e = responseData[i];
            const campaign = await smartContract.account.campaign.fetchNullable(
                e.address
            );
            if (!campaign) continue;

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
        if(prevSearch !== search || prevCategory !== category || prevFilter !== filter){
            setAllCampaigns(campaigns)
            setPrevCategory(category)
            setPrevFilter(filter)
            setPrevSearch(search)
        }
        else{
            setAllCampaigns(prevState => [...prevState, ...campaigns]);
        }
        setOffset(offset + 20);

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
            <div className='flex flex-col items-center'>
                <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
                    {allCampaigns?.map((campaign) => {
                        return (
                            <div className="gap-6 mt-6" key={campaign.address}>
                                <CampaignCard
                                    key={campaign.address}
                                    campaign={campaign}
                                />
                            </div>
                        );
                    })}
                </div>
                <button className="mt-8 stroke-black hover:stroke-[rgba(0,123,199,1)]" onClick={fetchAllCampaign}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26 16L16 26L6 16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M26 6L16 16L6 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        );
    return <>{content}</>;
};

export default CampaignList;
