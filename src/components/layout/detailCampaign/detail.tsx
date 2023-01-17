import Progress from './progress';
import CollectedFund from './collectedFund';
import Deadline from './deadline';
import Description from './description';
import FunderList from './funderList';
import Donation from './donation';
import FundraiserInfo from './fundraiserInfo';
import Voting from './voting';
import Claim from './claim';
import { useEffect, useState } from 'react';

const Detail = (props: any) => {
    const [initializing, setInitializing] = useState(true);

    useEffect(() => {
        setInitializing(false);
    },[])
    
    if(initializing === true) {
        return null
    }

    return (
        <div className="w-full px-12 md:flex md:flex-row md:pl-12">
            <div className="md:basis-9/12">
                <h1
                    className="
                    text-md font-bold mb-2
                    md:text-3xl md:mb-6"
                >
                    {props.campaign.title}
                </h1>
                <p
                    className="
                    text-xs
                    md:text-xl"
                >
                    Dibantu <b>100</b> funders
                </p>
                <Progress />
                <CollectedFund />
                <Deadline />
                <div className="md:hidden">
                    <FundraiserInfo campaign={props.campaign}/>
                    <Donation />
                    <Voting />
                    <Claim />
                </div>
                <Description campaign={props.campaign}/>
                <FunderList />
            </div>
            <aside
                className="hidden ml-6 flex flex-col basis-3/12
                md:block"
            >
                <FundraiserInfo campaign={props.campaign} />
                <Donation />
                <Voting />
                <Claim />
            </aside>
        </div>
    );
};

export default Detail;
