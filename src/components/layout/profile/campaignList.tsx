import { getAssociatedTokenAddressSync } from '@solana/spl-token';
import { useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import axios from 'axios';
import { BN } from 'bn.js';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSmartContract } from '../../../context/connection';
import { Solcare } from '../../../resources/solcare.types';
import {
    API_BASE_URL,
    getDerivedAccount,
    USDC_DECIMALS,
    USDC_MINT,
} from '../../../utils';
import CampaignCard from './card/campaignCard';

interface Campaign {
    address: string;
    title: string;
    description: string;
    status: string;

    createdAt: number;
    duration: number;

    collected: number;
    target: number;
}

const CampaignList = (props: any) => {
    const { connected, publicKey } = useWallet();
    const { smartContract } = useSmartContract();

    const [campaignList, setCampaignList] = useState<Campaign[]>();

    const getAllCampaign = async () => {
        if (!connected || !publicKey) {
            setCampaignList([]);
            return;
        }

        const list = await axios.get(
            API_BASE_URL + '/v1/campaign/user/' + publicKey.toBase58()
        );
        const campaignList: Campaign[] = [];
        console.log(list.data.data);

        await Promise.all(
            list.data.data.map(async (e: any) => {
                const campaign =
                    await smartContract.account.campaign.fetchNullable(
                        e.address
                    );
                if (campaign !== null) {
                    campaignList.push({
                        address: e.address,
                        title: e.title,
                        description: e.description,
                        status: campaign.status === 0 ? 'Aktif' : 'Voting',
                        createdAt: campaign.createdAt.toNumber(),
                        duration: campaign.heldDuration.toNumber(),
                        collected: campaign.fundedAmount
                            .div(new BN(Math.pow(10, USDC_DECIMALS)))
                            .toNumber(),
                        target: campaign.targetAmount
                            .div(new BN(Math.pow(10, USDC_DECIMALS)))
                            .toNumber(),
                    });
                }
            })
        );

        setCampaignList(campaignList);
    };

    useEffect(() => {
        getAllCampaign();
    }, [connected, publicKey]);

    return (
        <div className="flex flex-col max-[369px]:flex-col-reverse">
            <Link
                to="/profile/my-campaign/create"
                className="btn self-end bg-[#007BC7] text-xs text-white font-bold rounded-[5px] max-[369px]:w-full sm:text-base sm:rounded-[10px] capitalize border-none"
            >
                Buat Campaign
            </Link>
            <p className="text-left font-bold text-xs mt-2 sm:text-lg sm:mt-4">
                Daftar Campaign
            </p>
            <div className="flex flex-col">
                {campaignList?.length === 0 ? (
                    <p className='text-center my-5'>Belum ada campaign ...</p>
                ) : (
                    campaignList?.map((e) => {
                        return <CampaignCard key={e.address} {...e} />;
                    })
                )}
            </div>
        </div>
    );
};

export default CampaignList;
