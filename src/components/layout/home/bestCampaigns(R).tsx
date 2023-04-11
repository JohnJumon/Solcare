import BestCampaignsSlider from './carousel/bestCampaignsSlider(R)';

const BestCampaigns = () => {
    return (
        <article className="max-w-[1516px] w-[80vw] text-black">
            <div>
                <h2 className="font-bold text-md mb-3 text-center xl:text-2xl xl:mb-6 xl:text-left">
                    Campaign Unggulan
                </h2>
                <BestCampaignsSlider />
            </div>
        </article>
    );
};

export default BestCampaigns;
