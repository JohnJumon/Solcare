import Slider from 'react-slick';
import '../../../../../src/slick.css';
import '../../../../../src/slick-theme.css';
import BestCampaignCard from '../card/bestCampaignCard(R)';

const BestCampaignsSlider = () => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                },
            },
        ],
    };

    const generateCard = (count: number) => {
        let components = [];
        for (let i = 0; i < count; i++) {
            components.push(<BestCampaignCard />);
        }
        return components;
    };
    return (
        <div className="w-full">
            <Slider {...settings}>{generateCard(6)}</Slider>
        </div>
    );
};

export default BestCampaignsSlider;
