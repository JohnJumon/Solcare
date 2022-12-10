import CollectedFund from "../detailCampaign/collectedFund";
import Deadline from "../detailCampaign/deadline";
import Description from "../detailCampaign/description";
import FunderList from "../detailCampaign/funderList";
import Progress from "../detailCampaign/progress";
import Thumbnail from "../../../image/placeholder.svg"
import MoneyProposalButton from "./button/moneyProposalBtn";
import EvidenceProposalButton from "./button/evidenceProposalButton";
import TimeProposal from "./button/timeProposal";

interface DetailCampaignProps {
    status: string
}
const DetailCampaign:React.FC<DetailCampaignProps> = (props) => {
    const changeButton = (status: string) => {
        if(status == "Aktif"){
            return <MoneyProposalButton/>
        }
        if(status == "Voting"){
            return <TimeProposal/>
        }
        if(status == "Akhir"){
            return <EvidenceProposalButton/>
        }   
    }
    return (
        <div>
            <img className="
                    w-full h-[175px] rounded-[10px] object-cover mb-2
                    md:h-[350px] md:rounded-[20px] md:mb-4" src={Thumbnail} />
            <h1 className="
                text-md font-bold mb-2
                md:text-3xl md:mb-6">Judul</h1>
            <p className="
                text-xs
                md:text-xl">Dibantu <b>100</b> funders</p>
            <Progress />
            <CollectedFund />
            <Deadline />
            <Description />
            <FunderList />
            {changeButton(props.status)}
        </div>
    );
};

export default DetailCampaign;