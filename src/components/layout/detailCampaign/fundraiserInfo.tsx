import ProfilePlaceholder from "../../../image/profilePic.png";

const FundraiserInfo = () => {
    return (
        <div className="
            mt-2
            md:mt-4">
            <h2 className="
                mb-2 text-xs font-bold
                md:hidden">Info Fundraiser</h2>
            <div className="
                flex flex-row items-center
                md:flex-col">
                <div className="
                    flex flex-col items-center mr-2 pr-1
                    md:mr-0 md:pr-0">
                    <img className="
                        w-8 h-8 rounded-full
                        md:w-32 md:h-32" src={ProfilePlaceholder} alt="placeholder" />
                    <p className="
                        text-[8px]
                        md:text-[15px]">Status</p>
                </div>
                <div className="
                    flex flex-col pl-1
                    md:pl-0 md:self-start">
                    <p className="
                        text-xs font-bold
                        md:text-xl">Nama Fundraiser</p>
                    <p className="
                        text-[8px]
                        md:text-[15px]">Wallet Fundraiser</p>
                    <p className="
                        text-[8px]
                        md:text-[15px]">E-mail Fundraiser</p>
                </div>
            </div>
        </div>
    );
};

export default FundraiserInfo;