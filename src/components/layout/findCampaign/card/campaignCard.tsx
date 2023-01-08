import Thumbnail from '../../../../image/placeholder.svg';

const CampaignCard = () => {
    return (
        <div className="w-full rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,123,199,0.25)] hover:shadow-[0px_10px_10px_0px_rgba(0,123,199,0.5)]">
            <img className="
                w-screen max-h-[200px] object-cover rounded-[20px]
                xl:max-h-[300px]" src={Thumbnail} />
            <div className="p-6">
                <h1 className="
                    line-clamp-1 text-md font-bold mb-2
                    xl:text-2xl xl:my-4">Judul</h1>
                <p className="
                    line-clamp-4 text-xs text-justify mb-6
                    xl:text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sed elementum tempus egestas sed sed. Habitant morbi tristique senectus et netus. Eleifend donec pretium vulputate sapien nec sagittis aliquam. Condimentum id venenatis a condimentum. Nunc sed augue lacus viverra vitae congue. Pulvinar pellentesque habitant morbi tristique. Lorem sed risus ultricies tristique nulla aliquet enim. Dignissim suspendisse in est ante in nibh mauris. Fusce id velit ut tortor pretium viverra. Porttitor massa id neque aliquam vestibulum morbi. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan.</p>
                <div className="grid grid-cols-5 gap-4 mb-3 items-center">
                    <div className="
                        col-span-4 bg-gray-200 rounded-full h-2 dark:bg-gray-700
                        xl:h-4">
                        <div className="
                            bg-[#007BC7] h-2 rounded-full
                            xl:h-4" style={{width: '50%'}}/>
                    </div>
                    <p className="
                        font-bold text-xs text-center
                        xl:text-lg">50%</p>
                </div>
                <p className="
                    text-xs
                    xl:text-base
                    "><b>0</b> hari tersisa</p>
            </div>
        </div>
    );
};

export default CampaignCard;