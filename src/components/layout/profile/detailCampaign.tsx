import CollectedFund from '../detailCampaign/collectedFund';
import Description from '../detailCampaign/description';
import FunderList, { FunderInfo } from '../detailCampaign/funderList';
import Progress from '../detailCampaign/progress';
import Thumbnail from '../../../image/placeholder.svg';
import MoneyProposalButton from './button/moneyProposalBtn';
import EvidenceProposalButton from './button/evidenceProposalButton';
import TimeProposal from './button/timeProposal';
import {
    API_BASE_URL,
    STATUS_ACTIVE,
    STATUS_FILLED,
    STATUS_FUNDED,
    STATUS_FUND_CLAIMABLE,
    STATUS_VOTING,
    USDC_DECIMALS,
} from '../../../utils';
import { useEffect, useState } from 'react';
import { useSmartContract } from '../../../context/connection';
import {
    ACCOUNT_DISCRIMINATOR_SIZE,
    BN,
    utils,
    web3,
} from '@project-serum/anchor';
import ClaimFundButton from './button/claimFundButton';

const MyDetailCampaign = (props: any) => {
    let campaign = props.campaign;

    const changeButton = (status: number) => {
        if (status === STATUS_ACTIVE) {
            return (
                <div className="flex flex-col">
                    <label
                        className="text-center mt-4 self-end bg-[#007BC7] opacity-50 w-full text-xs p-2 border border-[2px] border-[#007BC7] text-white font-bold rounded-[5px]
                    md:text-xl md:p-4 md:rounded-[10px] cursor-not-allowed"
                    >
                        Belum Bisa Mengajukan Pencairan Dana
                    </label>
                </div>
            );
        } else if (status === STATUS_FILLED) {
            return <MoneyProposalButton campaignAddress={campaign.address} />;
        } else if (status === STATUS_VOTING) {
            return (
                <div className="flex flex-col">
                    <label
                        className="text-center mt-4 self-end bg-[#007BC7] opacity-50 w-full text-xs p-2 border border-[2px] border-[#007BC7] text-white font-bold rounded-[5px]
                    md:text-xl md:p-4 md:rounded-[10px] cursor-not-allowed"
                    >
                        Dalam Masa Voting
                    </label>
                </div>
            );
        } else if (status === STATUS_FUND_CLAIMABLE) {
            return (
                <ClaimFundButton
                    campaignAddress={campaign.address}
                    refetch={props.refetch}
                />
            );
        } else if (status == STATUS_FUNDED) {
            return <EvidenceProposalButton campaignAddress={campaign.address} />;
        }
    };

    const [funders, setFunders] = useState<FunderInfo[]>([]);
    const { smartContract } = useSmartContract();

    const fetchFunders = async () => {
        const donors = await smartContract.account.donor.all([
            {
                memcmp: {
                    offset: ACCOUNT_DISCRIMINATOR_SIZE + 32 /*donor: Pubkey*/,
                    bytes: utils.bytes.bs58.encode(
                        new web3.PublicKey(props.campaign.address).toBuffer()
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
                    profilePicture: '',
                };
            })
        );
    };

    useEffect(() => {
        fetchFunders();
    }, []);

    return (
        <div className="w-[100%] px-12 md:pl-12 mx-auto">
            <div className="md:basis-10/12">
                <img
                    className="
                w-screen max-h-[300px] object-cover mb-1
                md:max-h-[500px] md:rounded-b-[20px] md:mb-2"
                    src={`${API_BASE_URL}/${campaign.banner}`}
                />
                <h1
                    className="
                text-md font-bold mb-2
                md:text-3xl md:mb-6"
                >
                    {campaign.title}
                </h1>
                <p
                    className="
                text-xs
                md:text-xl mb-2"
                >
                    Dibantu <b>{funders.length}</b> funders
                </p>

                {campaign.collected === campaign.target ? (
                    <></>
                ) : (
                    <Progress
                        percentage={Math.min(
                            100,
                            (campaign.collected / campaign.target) * 100
                        )}
                    />
                )}

                <CollectedFund campaign={campaign} />
                <Description campaign={campaign} />
                <FunderList funders={funders} />
                {changeButton(campaign.status)}
            </div>
        </div>
    );
};

export default MyDetailCampaign;
