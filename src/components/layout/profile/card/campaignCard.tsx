import InProgress from './info/inProgress';
import InVoting from './info/inVoting';
import IsSuccess from './info/isSuccess';

interface CampaignCardProps {
    status: string;
    changePage: (page: string, status: string) => void;
}

const CampaignCard: React.FC<CampaignCardProps> = (props) => {
    const generateInfo = (status: string) => {
        if (status == 'Aktif') {
            return <InProgress />;
        }
        if (status == 'Voting') {
            return <InVoting />;
        }
        if (status == 'Akhir') {
            return <IsSuccess />;
        }
    };

    return (
        <div
            className="my-2 sm:my-4 flex flex-col text-xs sm:text-lg font-bold"
            onClick={() => {
                props.changePage('Detail Campaign', props.status);
            }}
        >
            <div className="flex flex-row justify-between bg-white rounded-t-[5px] sm:rounded-t-[10px]">
                <p className="line-clamp-1 p-2 sm:p-4">Judul</p>
                <p className="bg-[#007BC7] text-white p-2 px-3 sm:p-4 sm:px-6 rounded-t-[5px] sm:rounded-t-[10px]">
                    Status
                </p>
            </div>
            {generateInfo(props.status)}
        </div>
    );
};

export default CampaignCard;
