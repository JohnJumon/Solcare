import SearchBar from "./components/layout/findCampaign/searchBar";
import Category from "./components/layout/findCampaign/categories";
import Sort from "./components/layout/findCampaign/sort";
import CampaignList from "./components/layout/findCampaign/campaignList";

const FindCampaign = () => {
    return(
        <main className="max-w-screen-xl mx-auto px-12">
            <SearchBar/>
            <Category/>
            <Sort/>
            <CampaignList/>
        </main>
    );
};

export default FindCampaign;