interface CampaignInVotingCardProps {
    collected: number;
}

const InVoting: React.FC<CampaignInVotingCardProps> = (props) => {
    return (
        <div className="text-white flex flex-col">
            <div className="text-center bg-[#007BC7] rounded-[5px] rounded-tr-none sm:rounded-[10px] sm:rounded-tr-none p-2 sm:p-4">
                <p className="line-clamp-1 text-start max-[369px]:text-[8px]">
                    DANA TERKUMPUL
                </p>
                <p className="text-lg sm:text-3xl mt-2 sm:mt-4 leading-none">
                    {props.collected}
                </p>
                <p className="text-[8px] sm:text-[15px] mb-2 sm:mb-4 leading-none">
                    USDC
                </p>
            </div>
            <div className="text-black mt-2 rounded-[5px] sm:rounded-[10px] p-2 sm:p-4">
                <p className="line-clamp-1 text-start max-[369px]:text-[8px]">
                    PROGRESS VOTING
                </p>
                <div className="text-center">
                    <p className="text-lg sm:text-3xl mt-2 sm:mt-4">100</p>
                    <p className="text-[8px] sm:text-[15px] leading-none">
                        Suara
                    </p>
                </div>
                <div
                    className="
                                col-span-4 bg-green-600 rounded-full h-2 my-2
                                sm:h-4 sm:my-4"
                >
                    <div
                        className="
                                    bg-red-600 h-2 rounded-full
                                    sm:h-4"
                        style={{ width: '50%' }}
                    />
                </div>
                <div className="grid grid-cols-2 sm:grid-rows-1 gap-4 text-center max-[369px]:gap-2 max-[369px]:text-[8px]">
                    <div>
                        <p className="text-lg sm:text-3xl">50</p>
                        <p className="text-[8px] sm:text-[15px] leading-none">
                            Tidak Setuju
                        </p>
                    </div>
                    <div>
                        <p className="text-lg sm:text-3xl">50</p>
                        <p className="text-[8px] sm:text-[15px] leading-none">
                            Setuju
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InVoting;
