import Thumbnail from '../../../image/placeholder.svg';
import { API_BASE_URL } from '../../../utils';

const BannerContainer = (props: any) => {
    return (
        <>
            <img
                className="w-screen max-h-[250px] object-fit mb-1 md:max-h-[300px] lg:max-h-[350px] md:rounded-[20px] md:mb-4"
                src={`${API_BASE_URL}/${props.campaign.banner}`}
            />
        </>
    );
};

export default BannerContainer;
