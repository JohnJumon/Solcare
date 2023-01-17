import Thumbnail from '../../../image/placeholder.svg';
import { API_BASE_URL } from '../../../utils';

const BannerContainer = (props: any) => {
    return (
        <>
            <img
                className="
                    w-screen max-h-[300px] object-cover mb-1
                    md:max-h-[500px] md:rounded-b-[20px] md:mb-2"
                src={`${API_BASE_URL}/${props.campaign.banner}`}
            />
        </>
    );
};

export default BannerContainer;
