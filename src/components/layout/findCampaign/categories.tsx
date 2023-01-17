import Slider from 'react-slick';
import '../../../../src/slick.css';
import '../../../../src/slick-theme.css';
import { Link, useSearchParams } from 'react-router-dom';

const Category = (props: any) => {
    const settings = {
        className: 'slider variable-width',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToSlide: true,
    };

    let [searchParams, setSearchParams] = useSearchParams();

    return (
        <div className="w-full">
            <Slider {...settings}>
                {props.categories?.map((e: any) => {
                    return (
                        <div className="mr-5 max-w-56 w-56">
                            <button
                                className={`
                                border-solid border-2 border-transparent text-xs font-bold rounded-[10px] p-2 ${
                                    e.id.toString() !==
                                    searchParams.get('categoryId')
                                        ? 'text-[#007BC7] bg-white'
                                        : 'text-white bg-[#007BC7]'
                                } hover:border-solid hover:border-2 hover:border-[#007BC7]
                            md:p-4 md:text-xl`}
                                value={e.id}
                                onClick={() => {
                                    searchParams.set('categoryId', e.id);
                                    setSearchParams(searchParams);
                                }}
                            >
                                {e.name}
                            </button>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default Category;
