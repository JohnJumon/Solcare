import { Link } from 'react-router-dom';
import {
    STATUS_ACTIVE,
    STATUS_FAILED,
    STATUS_FILLED,
    STATUS_FUNDED,
    STATUS_FUND_CLAIMABLE,
    STATUS_NOT_FILLED,
    STATUS_NOT_FUNDED,
    STATUS_SUCCESS,
    STATUS_VOTING,
} from '../../../../utils';
import { ProposalInfo } from '../campaignList';
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

    proposal: ProposalInfo | null;
}

const CampaignCard: React.FC<CampaignCardProps> = (props) => {
    const statusToString = (status: number) => {
        switch (status) {
            case STATUS_ACTIVE:
                return 'Aktif';
            case STATUS_FILLED:
                return 'Terpenuhi';
            case STATUS_NOT_FILLED:
                return 'Gagal dipenuhi';
            case STATUS_VOTING:
                return 'Voting';
            case STATUS_FUNDED:
                return 'Voting berhasil';
            case STATUS_NOT_FUNDED:
                return 'Voting gagal';
            case STATUS_FUND_CLAIMABLE:
                return 'Dana dapat diklaim';
            case STATUS_SUCCESS:
                return 'Proyek Sukses';
            case STATUS_FAILED:
                return 'Proyek Gagal';
            default:
                return 'Unknown';
        }
    };

    return (
        <Link to={`/profile/my-campaign/detail/${props.address}`}>
            <div className="my-2 sm:my-4 flex flex-col text-xs sm:text-lg font-bold border-2 rounded-[10px]">
                <div className="flex flex-row justify-between bg-white rounded-t-[5px] sm:rounded-t-[10px]">
                    <p className="line-clamp-1 p-2 sm:p-4">{props.title}</p>
                    <p className="bg-[#007BC7] text-white p-2 px-3 sm:p-4 sm:px-6 rounded-t-[5px] sm:rounded-t-[10px]">
                        {statusToString(props.status)}
                    </p>
                </div>
                {props.status === STATUS_ACTIVE ||
                props.status === STATUS_FILLED ? (
                    <InProgress {...props} />
                ) : props.status === STATUS_VOTING ||
                  props.status === STATUS_FUND_CLAIMABLE ? (
                    <InVoting {...props} />
                ) : (
                    <IsSuccess {...props} />
                )}
            </div>
        </Link>
    );
};

export default CampaignCard;
