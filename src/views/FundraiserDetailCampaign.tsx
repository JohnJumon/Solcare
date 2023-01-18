import axios from 'axios';
import { BN } from 'bn.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyDetailCampaign from '../components/layout/profile/detailCampaign';
import { useSmartContract } from '../context/connection';
import { API_BASE_URL, USDC_DECIMALS } from '../utils';

interface CampaignInfo {
    address: string;
    ownerAddress: string;
    title: string;
    description: string;
    banner: string;

    target: number;
    collected: number;

    createdAt: number;
    duration: number;
    status: number;
}

const FundraiserDetailCampaign = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState<CampaignInfo[]>();
    const [initializing, setInitializing] = useState(true);

    const { smartContract } = useSmartContract();

    const fetchCampaignDetail = async () => {
        const response = await axios.get(API_BASE_URL + '/v1/campaign/' + id);
        const responseData = response.data.data;
        const e = responseData;

        const container: CampaignInfo[] = [];
        const campaign = await smartContract.account.campaign.fetchNullable(
            e.address
        );

        const data: CampaignInfo = {
            address: e.address,
            ownerAddress: e.ownerAddress,
            title: e.title,
            description: e.description,
            banner: e.banner,

            target: campaign!!.targetAmount
                .div(new BN(Math.pow(10, USDC_DECIMALS)))
                .toNumber(),
            collected: campaign!!.fundedAmount
                .div(new BN(Math.pow(10, USDC_DECIMALS)))
                .toNumber(),

            createdAt: campaign!!.createdAt.toNumber(),
            duration: campaign!!.heldDuration.toNumber(),
            status: e.status,
        };

        container.push(data);
        setDetail(container);
    };

    useEffect(() => {
        fetchCampaignDetail();
        setInitializing(false);
    }, [id]);

    if (initializing === true || detail === undefined) {
        return <progress className="progress w-[90%] flex mx-auto my-20" />;
    }

    return (
        <>
            {detail?.map((campaign) => {
                return (
                    <main className="max-w-screen-xl mx-auto">
                        <div>
                            <MyDetailCampaign campaign={campaign} />
                        </div>
                    </main>
                );
            })}
        </>
    );
};

export default FundraiserDetailCampaign;
