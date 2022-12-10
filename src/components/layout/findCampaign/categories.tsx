import Slider from "react-slick";
import '../../../../src/slick.css';
import '../../../../src/slick-theme.css';
const categories = ['Semua', 'Kesehatan', 'Pendidikan', 'Edukasi', 'Properti', 'Hiburan', 'Teknologi', 'Seni', 'Elektronik']

const Category = () => {
    const settings = {
        className: "slider variable-width",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToSlide: true
    };

    const generateCategory = () => {
        let components = [];
        for (let i = 0; i < categories.length; i++) {
            components.push(
                <div className="mr-5 max-w-56 w-56">
                    <button className="
                        bg-white border-solid border-2 border-transparent text-xs font-bold text-[#007BC7] rounded-[10px] p-2 focus:text-white focus:bg-[#007BC7] hover:border-solid hover:border-2 hover:border-[#007BC7]
                        md:p-4 md:text-xl">{categories[i]}</button>
                </div>  
            );
        }
        return components;
    }
    return (
        <div className="w-full">
            <Slider {...settings}>
                {generateCategory()}
            </Slider>
        </div>
    );
};

export default Category;