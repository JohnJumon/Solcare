import Detail from "./components/layout/detailCampaign/detail";
import Thumbnail from './image/placeholder.svg';

const DetailCampaign = () => {
    return(
        <main className="max-w-screen-xl mx-auto">
            <div className="">
                <img className="
                    w-screen max-h-[300px] object-cover mb-3
                    md:max-h-[500px] md:mb-6 md:rounded-b-[20px]" src={Thumbnail} />
                <Detail/>
            </div>
        </main>
    );
};

export default DetailCampaign;