import Thumbnail from '../../../../image/placeholder.svg';

const CampaignCard = (props: any) => {
    return (
        <div className="mx-3 rounded-[20px] text-black h-max shadow-[0px_4px_4px_0px_rgba(0,123,199,0.25)] hover:shadow-[0px_10px_10px_0px_rgba(0,123,199,0.5)] mb-4">
            <img
                className="w-screen max-h-[200px] object-cover rounded-[20px] xl:max-h-[300px]"
                src={Thumbnail}
            />
            <div className="p-6">
                <h1 className="line-clamp-1 text-md font-bold mb-2 xl:text-2xl xl:my-4">
                    Judul
                </h1>
                {props.type === 'Voting' ? (
                    <p className="text-xs xl:text-base text-center">
                        <p>Sisa waktu</p>
                        <p className="font-bold">3H 12J 30M 10D</p>
                    </p>
                ) : (
                    <p className="text-xs xl:text-base">
                        <p>
                            <span className="font-bold">
                                100
                                <span className="text-[6px] xl:text-[8px]">
                                    USDC
                                </span>
                            </span>{' '}
                            terkumpulkan
                        </p>
                        <p>
                            <span className="font-bold">90%</span> terpenuhi
                        </p>
                        <p>
                            <span className="font-bold">10</span> hari tersisa
                        </p>
                    </p>
                )}
            </div>
        </div>
    );
};

export default CampaignCard;
