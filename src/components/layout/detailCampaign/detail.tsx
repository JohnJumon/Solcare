import Progress from './progress';
import CollectedFund from './collectedFund';
import Deadline from './deadline';
import Description from './description';
import FunderList from './funderList';
import Donation from './donation';
import FundraiserInfo from './fundraiserInfo';
import Voting from './voting';
import Claim from './claim';

const Detail = () => {
    return (
        <div className="w-full px-12 md:flex md:flex-row md:pl-12">
            <div className="md:basis-9/12">
                <h1
                    className="
                    text-md font-bold mb-2
                    md:text-3xl md:mb-6"
                >
                    Judul
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
                    <FundraiserInfo />
                    <Donation />
                    <Voting />
                    <Claim />
                </div>
                <Description />
                <FunderList />
            </div>
            <aside
                className="hidden ml-6 flex flex-col basis-3/12
                md:block"
            >
                <FundraiserInfo />
                <Donation />
                <Voting />
                <Claim />
            </aside>
        </div>
    );
};

export default Detail;
