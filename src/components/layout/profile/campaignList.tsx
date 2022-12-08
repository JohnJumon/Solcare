import CampaignCard from "./card/campaignCard";

const CampaignList = () => {
    return (
        <div className="flex flex-col max-[369px]:flex-col-reverse">
            <button className="
                    self-end bg-[#007BC7] text-xs p-2 text-white font-bold rounded-[5px]
                    max-[369px]:w-full sm:text-base sm:p-4 sm:rounded-[10px]">
                Buat Campaign
            </button>
            <p className="text-left font-bold text-xs mt-2 sm:text-lg sm:mt-4">Daftar Campaign</p>
            <div className="flex flex-col">
                <CampaignCard status="Aktif"/>
                <CampaignCard status="Voting"/>
                <CampaignCard status="Akhir"/>
            </div>
        </div>
    );
};

export default CampaignList;