import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Thumbnail from '../../../../image/placeholder.svg';
import { API_BASE_URL } from '../../../../utils';

const CampaignCard = (props: any) => {
    let content = props.campaign;

    const imageBanner = content.banner;
    const banner = `${API_BASE_URL}/${imageBanner}`;

    return (
        <Link to={`/campaign/${content.address}`}>
            <div className="w-full h-[100%] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,123,199,0.25)] hover:shadow-[0px_10px_10px_0px_rgba(0,123,199,0.5)]">
                <img
                    className="
                w-screen h-[200px] object-cover rounded-[20px]
                xl:max-h-[300px]"
                    src={banner}
                />
                <div className="p-6">
                    <h1
                        className="
                    h-[50px] line-clamp-1 text-md font-bold mb-2
                    xl:text-2xl xl:my-4"
                    >
                        {content.title}
                    </h1>
                    <p
                        className="
                    h-[100px] line-clamp-4 text-xs text-justify mb-6
                    xl:text-base "
                    >
                        {content.description}
                    </p>
                    <div className="grid grid-cols-5 gap-4 mb-3 items-center">
                        <div
                            className="
                        col-span-4 bg-gray-200 rounded-full h-2 dark:bg-gray-700
                        xl:h-4"
                        >
                            <div
                                className="
                            bg-[#007BC7] h-2 rounded-full
                            xl:h-4"
                                style={{ width: '50%' }}
                            />
                        </div>
                        <p
                            className="
                        font-bold text-xs text-center
                        xl:text-lg"
                        >
                            50%
                        </p>
                    </div>
                    <p
                        className="
                    text-xs
                    xl:text-base
                    "
                    >
                        <b>0</b> hari tersisa
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default CampaignCard;
