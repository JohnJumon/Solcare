import CampaignCard from "./card/campaignCard";

interface CampaignListProps {
    changePage: (page:string, status:string) => void
} 

const CampaignList:React.FC<CampaignListProps> = (props) => {
    return (
        <div className="flex flex-col max-[369px]:flex-col-reverse">
            <button onClick={()=>{props.changePage("Buat Campaign","")}} className="
                    self-end bg-[#007BC7] text-xs p-2 text-white font-bold rounded-[5px]
                    max-[369px]:w-full sm:text-base sm:p-4 sm:rounded-[10px]">
                Buat Campaign
            </button>
            <p className="text-left font-bold text-xs mt-2 sm:text-lg sm:mt-4">Daftar Campaign</p>
            <div className="flex flex-col">
                <CampaignCard status="Aktif" changePage={props.changePage}/>
                <CampaignCard status="Voting" changePage={props.changePage}/>
                <CampaignCard status="Akhir" changePage={props.changePage}/>
            </div>
        </div>
    );
};

export default CampaignList;