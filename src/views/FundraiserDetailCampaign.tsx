import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyDetailCampaign from '../components/layout/profile/detailCampaign';
import { API_BASE_URL } from '../utils';

const FundraiserDetailCampaign = () => {
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

    if (initializing === true || detail === undefined) {
        return <progress className="progress w-[90%] flex mx-auto my-20" />;
    }

    return (
        <main className="max-w-screen-xl mx-auto">
            <div>
                <MyDetailCampaign campaign={detail} />
            </div>
        </main>
    );
};

export default FundraiserDetailCampaign;
