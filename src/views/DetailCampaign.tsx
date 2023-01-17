import Detail from '../components/layout/detailCampaign/detail';
import Thumbnail from '../image/placeholder.svg';
import Action from '../components/layout/detailCampaign/action';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../utils';
import { useEffect, useState } from 'react';
import BannerContainer from '../components/layout/detailCampaign/bannerContainer';

const DetailCampaign = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState();
    const [initializing, setInitializing] = useState(true);

    const fetchCampaignDetail = async () => {
        const response = await axios.get(API_BASE_URL + '/v1/campaign/' + id);
        const responseData = response.data.data;

        setDetail(responseData);
    };

    useEffect(() => {
        fetchCampaignDetail();
        setInitializing(false);
    }, [id]);

    if(initializing === true || detail === undefined) {
        return <progress className="progress w-[90%] flex mx-auto my-20" />
    }

    return (
        <main className="max-w-screen-xl mx-auto">
            <div>
                <BannerContainer campaign={detail} />
                <Action />
                <Detail campaign={detail} />
            </div>
        </main>
    );
};

export default DetailCampaign;
