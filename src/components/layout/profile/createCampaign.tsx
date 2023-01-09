import Category from '../findCampaign/categories';
import TargetValue from './createCampaign/targetValue';
import Deadline from './createCampaign/deadline';
import Title from './createCampaign/title';
import Description from './createCampaign/description';
import UploadThumbnail from './createCampaign/uploadThumbnail';
const CreateCampaign = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <p className="font-bold text-xs md:text-lg">
                    Isi Informasi Campaign
                </p>
                <div className="mt-2">
                    <Title />
                </div>
                <div className="mt-2">
                    <Description />
                </div>
                <div className="mt-2">
                    <p className="text-xs md:text-lg">Kategori</p>
                    <Category />
                </div>
                <div className="mt-4 flex flex-col md:flex-row gap-4">
                    <div className="basis-1/2">
                        <TargetValue />
                    </div>
                    <div className="basis-1/2">
                        <Deadline />
                    </div>
                </div>
                <div className="mt-2">
                    <UploadThumbnail />
                </div>
                <button
                    className="
                    mt-4 self-end bg-[#007BC7] text-xs w-full p-2 border border-[2px] border-[#007BC7] text-white font-bold rounded-[5px]
                    md:text-xl md:p-4 md:rounded-[10px]"
                >
                    Buat Campaign
                </button>
            </div>
        </div>
    );
};

export default CreateCampaign;
