import Progress from './progress';
import CollectedFund from './collectedFund';
import Description from './description';
import FunderList from './funderList';
import Donation from './donation';
import FundraiserInfo from './fundraiserInfo';
import Voting from './voting';
import Claim from './claim';
import { useEffect, useState } from 'react';
import { now } from '../../../utils';
import { PublicKey } from '@solana/web3.js';

const Detail = (props: any) => {
    let content = props.campaign;

    const [initializing, setInitializing] = useState(true);

    useEffect(() => {
        setInitializing(false);
    }, []);

    if (initializing === true) {
        return null;
    }

    const campaign = props.campaign;

    const countRemainingTime = () => {
        const remainingTime = Math.max(
            campaign.createdAt + campaign.duration - now(),
            0
        );
        return remainingTime;
    };

    const showRemainingDays = () => {
        const DAY_IN_SECOND = 60 * 60 * 24;

        if (countRemainingTime() > 0) {
            if (countRemainingTime() > DAY_IN_SECOND) {
                return Math.floor(countRemainingTime() / DAY_IN_SECOND);
            } else {
                return '< 1';
            }
        } else {
            return '0';
        }
    };

    const changeButton = (status: number) => {
        if (status === 0) {
            return (
                <Donation campaignAddress={new PublicKey(campaign.address)} />
            );
        } else if (status == 8) {
            return <Voting />;
        } else if (status == 9) {
            return <Claim />;
        }
    };

    return (
        <div className="w-full px-12 md:flex md:flex-row md:pl-12">
            <div className="md:basis-9/12">
                <h1
                    className="
                    text-md font-bold mb-2
                    md:text-3xl md:mb-6"
                >
                    {content.title}
                </h1>
                <p
                    className="
                    text-xs
                    md:text-xl"
                >
                    Dibantu <b>XXX</b> funders
                </p>
                <Progress
                    percentage={Math.min(
                        100,
                        (campaign.collected / campaign.target) * 100
                    )}
                />
                <div
                    className="
            mb-[3px]
            md:mb-3"
                >
                    <p
                        className="
                text-base leading-none
                md:text-3xl"
                    >
                        <b>
                            {campaign.collected.toLocaleString()}
                            <span
                                className="
                    text-[8px]
                    md:text-[15px]"
                            >
                                USDC
                            </span>
                        </b>
                    </p>
                    <p
                        className="
                text-[8px]
                md:text-[15px]"
                    >
                        Dana terkumpul dari{' '}
                        <b>
                            {campaign.target.toLocaleString()}
                            <span className="text-[7.5px]">USDC</span>
                        </b>
                    </p>
                </div>
                <div
                    className="
            mb-[3px]
            md:mb-[9px]"
                >
                    <p
                        className="
                text-md leading-none
                md:text-3xl"
                    >
                        <b>{showRemainingDays()}</b>
                    </p>
                    <p
                        className="
                text-[8px]
                md:text-[15px]"
                    >
                        Hari tersisa
                    </p>
                </div>
                <div className="md:hidden">
                    <FundraiserInfo campaign={content} />
                    {changeButton(content.status)}

                    {/* <Donation />
                    <Voting />
                    <Claim /> */}
                </div>
                <Description campaign={content} />
                <FunderList />
            </div>
            <aside
                className="hidden ml-6 flex flex-col basis-3/12
                md:block"
            >
                <FundraiserInfo campaign={content} />
                {changeButton(content.status)}

                {/* <Donation />
                <Voting />
                <Claim /> */}
            </aside>
        </div>
    );
};

export default Detail;
