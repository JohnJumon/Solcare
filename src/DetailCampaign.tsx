import Detail from "./components/layout/detailCampaign/detail";
import Thumbnail from './image/placeholder.svg';
import Action from "./components/layout/detailCampaign/action";

const DetailCampaign = () => {
    return(
        <main className="max-w-screen-xl mx-auto">
            <div className="">
                <img className="
                    w-screen max-h-[300px] object-cover mb-1
                    md:max-h-[500px] md:rounded-b-[20px] md:mb-2" src={Thumbnail} />
                <Action/>
                <Detail/>
            </div>
        </main>
    );
};

export default DetailCampaign;