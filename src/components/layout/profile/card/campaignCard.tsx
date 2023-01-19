import { Link } from 'react-router-dom';
import { STATUS_ACTIVE, STATUS_FILLED, STATUS_VOTING } from '../../../../utils';
import InProgress from './info/inProgress';
import InVoting from './info/inVoting';
import IsSuccess from './info/isSuccess';

interface CampaignCardProps {
    status: number;
    title: string;
    target: number;
    collected: number;
    createdAt: number;
    duration: number;
    address: string;
}

const CampaignCard: React.FC<CampaignCardProps> = (props) => {
    return (
        <Link to={`/profile/my-campaign/detail/${props.address}`}>
            <div className="my-2 sm:my-4 flex flex-col text-xs sm:text-lg font-bold border-2 rounded-[10px]">
                <div className="flex flex-row justify-between bg-white rounded-t-[5px] sm:rounded-t-[10px]">
                    <p className="line-clamp-1 p-2 sm:p-4">{props.title}</p>
                    <p className="bg-[#007BC7] text-white p-2 px-3 sm:p-4 sm:px-6 rounded-t-[5px] sm:rounded-t-[10px]">
                        {props.status}
                    </p>
                </div>
                {props.status === STATUS_ACTIVE ||
                props.status === STATUS_FILLED ? (
                    <InProgress {...props} />
                ) : props.status === STATUS_VOTING ? (
                    <InVoting {...props} />
                ) : (
                    <IsSuccess {...props} />
                )}
            </div>
        </Link>
    );
};

export default CampaignCard;
