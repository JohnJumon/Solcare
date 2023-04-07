import Intro from '../components/layout/home/intro';
import ConnectWallet from '../components/layout/home/connectWallet';
import BestCampaigns from '../components/layout/home/bestCampaigns';
import Campaigns from '../components/layout/home/campaigns';
import { useWallet } from '@solana/wallet-adapter-react';
import { useSmartContract } from '../context/connection';
import { useEffect, useState } from 'react';
import { ACCOUNT_DISCRIMINATOR_SIZE, BN, utils } from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';
import {
    API_BASE_URL,
    PROPOSAL_SEED,
    USDC_DECIMALS,
    getDerivedAccount,
    now,
} from '../utils';
import axios from 'axios';

const Home = () => {
    const { connected, publicKey } = useWallet();
    const { smartContract } = useSmartContract();

    const [donatedCampaigns, setDonatedCampaigns] = useState(new Array<any>());
    const [ongoingProposal, setOngoingProposal] = useState(new Array<any>());

    const fetchDonatedCampaign = async () => {
        if (connected && publicKey) {
            const newDonatedCampaigns: any[] = [];
            const newOngoingProposal: any[] = [];

            const donors = await smartContract.account.donor.all([
                {
                    memcmp: {
                        offset: ACCOUNT_DISCRIMINATOR_SIZE,
                        bytes: utils.bytes.bs58.encode(publicKey.toBuffer()),
                    },
                },
            ]);

            const proposalPubkeys = new Array<PublicKey>();

            await Promise.all(
                donors.map(async (e) => {
                    try {
                        const campaignData =
                            await smartContract.account.campaign.fetch(
                                e.account.campaign
                            );

                        const response = await axios.get(
                            API_BASE_URL + '/v1/campaign/' + e.account.campaign
                        );
                        const responseData = response.data.data;

                        newDonatedCampaigns.push({
                            ...campaignData,
                            campaign: e.account.campaign,
                            collected: campaignData.fundedAmount
                                .div(new BN(Math.pow(10, USDC_DECIMALS)))
                                .toNumber(),
                            target: campaignData.targetAmount
                                .div(new BN(Math.pow(10, USDC_DECIMALS)))
                                .toNumber(),
                            duration: campaignData.heldDuration,
                            title: responseData.title,
                            banner: responseData.banner,
                        });

                        proposalPubkeys.push(
                            getDerivedAccount(
                                [PROPOSAL_SEED, e.account.campaign],
                                smartContract.programId
                            ).publicKey
                        );
                    } catch (e) {}
                })
            );

            const proposals =
                await smartContract.account.proposal.fetchMultiple(
                    proposalPubkeys
                );
            await Promise.all(
                proposals.map(async (e) => {
                    if (e !== null) {
                        const acc = e as any;
                        if (
                            now() <
                            acc.createdAt.toNumber() + acc.duration.toNumber()
                        ) {
                            try {
                                const response = await axios.get(
                                    API_BASE_URL +
                                        '/v1/campaign/' +
                                        acc.campaign
                                );
                                const responseData = response.data.data;
                                newOngoingProposal.push({
                                    ...acc,
                                    title: responseData.title,
                                    banner: responseData.banner,
                                });
                            } catch (e) {}
                        }
                    }
                })
            );

            setOngoingProposal(newOngoingProposal);
            setDonatedCampaigns(newDonatedCampaigns);
        }
    };

    useEffect(() => {
        if (connected && publicKey) {
            fetchDonatedCampaign();
        }
    }, [connected, publicKey]);

    return (
        <main className="flex flex-col items-center">
            <Intro />
            {connected ? (
                <>
                    <Campaigns type="Voting" data={ongoingProposal} />
                    <Campaigns type="Helped" data={donatedCampaigns} />
                </>
            ) : (
                <ConnectWallet />
            )}
            {/*<BestCampaigns />*/}
        </main>
    );
};

export default Home;
