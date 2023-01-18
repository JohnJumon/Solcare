import Progress from './progress';
import CollectedFund from './collectedFund';
import Description from './description';
import FunderList from './funderList';
import Donation from './donation';
import FundraiserInfo from './fundraiserInfo';
import Voting from './voting';
import Claim from './claim';
import { useEffect, useState } from 'react';

const Detail = (props: any) => {
    let content = props.campaign;

    const [initializing, setInitializing] = useState(true);

    useEffect(() => {
        setInitializing(false);
    }, []);

    if (initializing === true) {
        return null;
    }

    const changeButton = (status: number) => {
        if (status === 0) {
            return <Donation />;
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
                <Progress campaign={content} />
                <CollectedFund campaign={content} />
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
