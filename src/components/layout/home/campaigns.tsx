import CampaignSlider from './carousel/campaignSlider';

const Campaigns = (props:any) => {
    return (
        <article className={`max-w-[1516px] w-[80vw] mb-6 ${(props.type === "Voting" ? "mt-12 xl:mt-24" : '')}`} >
            <div>
                <h2
                    className="
                    font-bold text-md mb-3 text-center
                    xl:text-2xl xl:mb-6 xl:text-left"
                >
                    {props.type === "Voting" ? "Waktunya Untuk Voting" : "Campaign Yang Anda Bantu"}
                </h2>
                <CampaignSlider type={props.type}/>
            </div>
        </article>
    );
};

export default Campaigns;
