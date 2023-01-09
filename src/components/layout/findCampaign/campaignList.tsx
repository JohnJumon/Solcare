import CampaignCard from './card/campaignCard';

const CampaignList = () => {
    const generateCard = (count: number) => {
        let components = [];
        for (let i = 0; i < count; i++) {
            components.push(<CampaignCard />);
        }
        return components;
    };

    return (
        <div
            className="
            grid grid-cols-1 gap-6 mt-6
            md:grid-cols-2
            xl:grid-cols-3"
        >
            {generateCard(12)}
        </div>
    );
};

export default CampaignList;
