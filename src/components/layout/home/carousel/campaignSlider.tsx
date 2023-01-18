import Slider from 'react-slick';
import '../../../../../src/slick.css';
import '../../../../../src/slick-theme.css';
import CampaignCard from '../card/campaignCard';

const CampaignSlider = (props: any) => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    infinite: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const generateCard = (count: number, type: string) => {
        let components = [];
        for (let i = 0; i < count; i++) {
            components.push(<CampaignCard type={type} />);
        }
        return components;
    };
    return (
        <div className="w-full">
            <Slider {...settings}>{generateCard(6, props.type)}</Slider>
        </div>
    );
};

export default CampaignSlider;
