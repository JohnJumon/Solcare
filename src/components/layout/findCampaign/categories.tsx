import Slider from 'react-slick';
import '../../../../src/slick.css';
import '../../../../src/slick-theme.css';
import { Link, useParams } from 'react-router-dom';

const Category = (props: any) => {
    const settings = {
        className: 'slider variable-width',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToSlide: true,
    };

    let { category, search, filter } = useParams();
    if (search === undefined) {
        search = '';
    }
    if (filter === undefined) {
        filter = "new";
    }
    const generateCategory = () => {
        let components: JSX.Element[] = []
        if (category === undefined || category === "Semua") {
            components.push(
                <div className="mr-5 max-w-56 w-56">
                    <Link to={`/explore/Semua/${(search !== '') ? search : ''}/${filter}`}>
                        <button
                            className="
                            border-solid border-2 border-transparent text-xs font-bold rounded-[10px] p-2 text-white bg-[#007BC7] hover:border-solid hover:border-2 hover:border-[#007BC7]
                            md:p-4 md:text-xl"
                            value={0}
                        >
                            {"Semua"}
                        </button>
                    </Link>
                </div>
            )
        }
        else {
            components.push(
                <div className="mr-5 max-w-56 w-56">
                    <Link to={`/explore/Semua/${(search !== '') ? search : ''}/${filter}`}>
                        <button
                            className="
                            border-solid border-2 border-transparent text-xs font-bold rounded-[10px] p-2 text-[#007BC7] bg-white hover:border-solid hover:border-2 hover:border-[#007BC7]
                            md:p-4 md:text-xl"
                            value={0}
                        >
                            {"Semua"}
                        </button>
                    </Link>
                </div>
            )
        }

        props.categories?.map((e: any) => {
            if (category === e.name) {
                components.push(
                    <div className="mr-5 max-w-56 w-56">
                        <Link to={`/explore/${e.name}/${(search !== '') ? search : ''}/${filter}`}>
                            <button
                                className="
                            border-solid border-2 border-transparent text-xs font-bold rounded-[10px] p-2 text-white bg-[#007BC7] hover:border-solid hover:border-2 hover:border-[#007BC7]
                            md:p-4 md:text-xl"
                                value={e.id}
                            >
                                {e.name}
                            </button>
                        </Link>
                    </div>
                )
            }
            else {
                components.push(
                    <div className="mr-5 max-w-56 w-56">
                        <Link to={`/explore/${e.name}/${(search !== '') ? search : ''}/${filter}`}>
                            <button
                                className="
                            border-solid border-2 border-transparent text-xs font-bold rounded-[10px] p-2 text-[#007BC7] bg-white hover:border-solid hover:border-2 hover:border-[#007BC7]
                            md:p-4 md:text-xl"
                                value={e.id}
                            >
                                {e.name}
                            </button>
                        </Link>
                    </div>
                )
            }

        })
        return components;
    };
    return (
        <div className="w-full">
            <Slider {...settings}>{generateCategory()}</Slider>
        </div>
    );
};

export default Category;
