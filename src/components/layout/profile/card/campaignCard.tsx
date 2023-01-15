import InProgress from './info/inProgress';
import InVoting from './info/inVoting';
import IsSuccess from './info/isSuccess';

interface CampaignCardProps {
    status: string;
    title: string;
    target: number;
    collected: number;
    createdAt: number;
    duration: number;
}

const CampaignCard: React.FC<CampaignCardProps> = (props) => {
    return (
        <div className="my-2 sm:my-4 flex flex-col text-xs sm:text-lg font-bold border-2 rounded-[10px]">
            <div className="flex flex-row justify-between bg-white rounded-t-[5px] sm:rounded-t-[10px]">
                <p className="line-clamp-1 p-2 sm:p-4">{props.title}</p>
                <p className="bg-[#007BC7] text-white p-2 px-3 sm:p-4 sm:px-6 rounded-t-[5px] sm:rounded-t-[10px]">
                    {props.status}
                </p>
            </div>
            {props.status === 'Aktif' ? (
                <InProgress {...props} />
            ) : props.status === 'Voting' ? (
                <InVoting {...props} />
            ) : (
                <IsSuccess {...props} />
            )}
        </div>
    );
};

export default CampaignCard;
