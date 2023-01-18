import CollectedFund from '../detailCampaign/collectedFund';
import Deadline from '../detailCampaign/deadline';
import Description from '../detailCampaign/description';
import FunderList from '../detailCampaign/funderList';
import Progress from '../detailCampaign/progress';
import Thumbnail from '../../../image/placeholder.svg';
import MoneyProposalButton from './button/moneyProposalBtn';
import EvidenceProposalButton from './button/evidenceProposalButton';
import TimeProposal from './button/timeProposal';
import { API_BASE_URL } from '../../../utils';

const MyDetailCampaign = (props: any) => {
    let content = props.campaign;    

    const changeButton = (status: number) => {
        if (status === 0) {
            return <MoneyProposalButton />;
        } else if (status == 9) {
            return <EvidenceProposalButton />;
        }
    };
    return (
        <div className="w-[100%] px-12 md:pl-12 mx-auto">
            <div className="md:basis-10/12">
                <img
                    className="
                w-screen max-h-[300px] object-cover mb-1
                md:max-h-[500px] md:rounded-b-[20px] md:mb-2"
                    src={`${API_BASE_URL}/${content.banner}`}
                />
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
                    Dibantu <b>YYY</b> funders
                </p>
                <Progress campaign={content}/>
                <CollectedFund campaign={content} />
                <Description campaign={content} />
                <FunderList />
                {changeButton(content.status)}
            </div>
        </div>
    );
};

export default MyDetailCampaign;
