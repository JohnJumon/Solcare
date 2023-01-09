const TransactionInfo = () => {
    return (
        <div className="flex flex-row mb-2">
            <div className="text-white basis-2/3 flex flex-col bg-[#007BC7] rounded-[5px] sm:rounded-[10px] p-2 sm:p-4">
                <p className="max-[369px]:text-[8px]">JENIS TRANSAKSI</p>
                <p className="line-clamp-2 max-[369px]:text-[8px] font-normal">
                    Nama Campaign
                </p>
                <p className="text-[8px] sm:text-[15px] leading-none font-thin">
                    Address
                </p>
            </div>
            <div className="basis-1/3 flex flex-col text-center justify-center">
                <p className="text-base sm:text-3xl leading-none">1.985</p>
                <p className="text-[8px] sm:text-[15px] leading-none">USDC</p>
            </div>
        </div>
    );
};

export default TransactionInfo;
