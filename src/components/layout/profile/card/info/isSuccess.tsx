const IsSuccess = () => {
    return (
        <div className="text-white flex flex-col">
            <div className="text-center bg-[#007BC7] rounded-[5px] rounded-tr-none sm:rounded-[10px] sm:rounded-tr-none p-2 sm:p-4">
                <p className="line-clamp-1 text-start max-[369px]:text-[8px]">
                    DANA TERKUMPUL
                </p>
                <p className="text-lg sm:text-3xl mt-2 sm:mt-4 leading-none">
                    500
                </p>
                <p className="text-[8px] sm:text-[15px] mb-2 sm:mb-4 leading-none">
                    USDC
                </p>
            </div>
            <div className="text-black mt-2 rounded-[5px] sm:rounded-[10px] p-2 sm:p-4">
                <div className="text-center">
                    <p className="text-lg sm:text-3xl mt-2 sm:mt-4">
                        Sukses/Gagal
                    </p>
                    <p className="text-[8px] sm:text-[15px] leading-none">
                        Alasan
                    </p>
                </div>
            </div>
        </div>
    );
};

export default IsSuccess;
