import Detail from '../components/layout/detailCampaign/detail';
import Thumbnail from '../image/placeholder.svg';
import Action from '../components/layout/detailCampaign/action';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
    API_BASE_URL,
    getDerivedAccount,
    now,
    PROPOSAL_SEED,
    STATUS_ACTIVE,
    STATUS_FUNDED,
    STATUS_NOT_FILLED,
    STATUS_NOT_FUNDED,
    STATUS_VOTING,
    USDC_DECIMALS,
} from '../utils';
import { useEffect, useState } from 'react';
import BannerContainer from '../components/layout/detailCampaign/bannerContainer';
import { useSmartContract } from '../context/connection';
import { BN } from 'bn.js';
import { ACCOUNT_DISCRIMINATOR_SIZE, utils, web3 } from '@project-serum/anchor';
import { FunderInfo } from '../components/layout/detailCampaign/funderList';

interface DetailCampaign {
    address: string;
    ownerAddress: string;

    title: string;
    description: string;
    banner: string;
    status: number;

    createdAt: number;
    duration: number;

    collected: number;
    target: number;
}

const DetailCampaign = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState<DetailCampaign>();
    const [funders, setFunders] = useState<FunderInfo[]>([]);
    const [initializing, setInitializing] = useState(true);
    const { smartContract } = useSmartContract();

    const fetchCampaignDetail = async () => {
        const response = await axios.get(API_BASE_URL + '/v1/campaign/' + id);
        const responseData = response.data.data;

        const campaign = await smartContract.account.campaign.fetchNullable(
            responseData.address
        );

        if (!campaign) {
            console.log('Unexpected error, campaign not found!');
            return;
        }

        let status = campaign.status;
        if (
            status === STATUS_ACTIVE &&
            campaign.createdAt.toNumber() + campaign.heldDuration.toNumber() <
                now()
        ) {
            status = STATUS_NOT_FILLED;
        } else if (status === STATUS_VOTING) {
            const proposalDerivedAccount = getDerivedAccount(
                [PROPOSAL_SEED, new web3.PublicKey(responseData.address)],
                smartContract.programId
            );
            const proposal = await smartContract.account.proposal.fetchNullable(
                proposalDerivedAccount.publicKey
            );

            if (!proposal) {
                console.log('Unexpected error, proposal not found!');
                return;
            }
            // clock.unix_timestamp <= proposal.created_at + proposal.duration) @ CustomError::CampaignIsNotInVotingPeriod
            if (
                now() >
                proposal.createdAt.toNumber() + proposal.duration.toNumber()
            ) {
                if (
                    (proposal.agree.eqn(0) && proposal.disagree.eqn(0)) ||
                    proposal.agree.gt(proposal.disagree)
                ) {
                    status = STATUS_FUNDED;
                } else {
                    status = STATUS_NOT_FUNDED;
                }
            }
        }

        setDetail({
            address: responseData.address,
            ownerAddress: responseData.ownerAddress,
            title: responseData.title,
            description: responseData.description,
            banner: responseData.banner,
            status: campaign.status,
            createdAt: campaign.createdAt.toNumber(),
            duration: campaign.heldDuration.toNumber(),
            collected: campaign.fundedAmount
                .div(new BN(Math.pow(10, USDC_DECIMALS)))
                .toNumber(),
            target: campaign.targetAmount
                .div(new BN(Math.pow(10, USDC_DECIMALS)))
                .toNumber(),
        });
    };

    const fetchFunders = async () => {
        const donors = await smartContract.account.donor.all([
            {
                memcmp: {
                    offset: ACCOUNT_DISCRIMINATOR_SIZE + 32 /*donor: Pubkey*/,
                    bytes: utils.bytes.bs58.encode(
                        new web3.PublicKey(id!).toBuffer()
                    ),
                },
            },
        ]);

        setFunders(
            donors.map((e) => {
                return {
                    address: e.publicKey.toBase58(),
                    owner: e.account.donor.toBase58(),
                    name: '-',
                    amount: e.account.donatedAmount
                        .div(new BN(Math.pow(10, USDC_DECIMALS)))
                        .toNumber(),
                    date: e.account.updatedAt.toNumber(),
                };
            })
        );
    };

    useEffect(() => {
        fetchCampaignDetail();
        fetchFunders();
        setInitializing(false);
    }, []);

    if (initializing === true || detail === undefined) {
        return <progress className="progress w-[90%] flex mx-auto my-20" />;
    }

    return (
        <main className="max-w-screen-xl mx-auto">
            <div>
                <BannerContainer campaign={detail} />
                <Action />
                <Detail
                    campaign={detail}
                    funders={funders}
                    refetch={fetchCampaignDetail}
                />
            </div>
        </main>
    );
};

export default DetailCampaign;
