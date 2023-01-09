import Thumbnail from '../../../../image/placeholder.svg';

const BestCampaignCard = () => {
    return (
        <div className="mx-3 rounded-[20px] text-black h-max shadow-[0px_4px_4px_0px_rgba(0,123,199,0.25)] hover:shadow-[0px_10px_10px_0px_rgba(0,123,199,0.5)] mb-4">
            <img
                className="
                w-screen max-h-[200px] object-cover rounded-[20px]
                xl:max-h-[300px]"
                src={Thumbnail}
            />
            <div className="p-6">
                <h1
                    className="
                    line-clamp-1 text-md font-bold mb-2
                    xl:text-2xl xl:my-4"
                >
                    Judul
                </h1>
                <p
                    className="
                    line-clamp-4 text-xs text-justify
                    xl:text-base "
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Massa sed elementum tempus egestas sed sed. Habitant
                    morbi tristique senectus et netus. Eleifend donec pretium
                    vulputate sapien nec sagittis aliquam. Condimentum id
                    venenatis a condimentum. Nunc sed augue lacus viverra vitae
                    congue. Pulvinar pellentesque habitant morbi tristique.
                    Lorem sed risus ultricies tristique nulla aliquet enim.
                    Dignissim suspendisse in est ante in nibh mauris. Fusce id
                    velit ut tortor pretium viverra. Porttitor massa id neque
                    aliquam vestibulum morbi. Ullamcorper morbi tincidunt ornare
                    massa eget egestas purus viverra accumsan.
                </p>
            </div>
        </div>
    );
};

export default BestCampaignCard;
