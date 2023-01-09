import ProfilePlaceholder from '../../../image/profilePic.png';

const UserDetail = () => {
    return (
        <div className="flex flex-col">
            <div
                className="
                flex flex-col
                md:flex-row items-center shadow-[0px_4px_6px_2px_rgba(0,123,199,0.5)] p-8 rounded-[10px]"
            >
                <img
                    className="
                        md:basis-1/12 w-24 h-24 rounded-full
                        md:w-28 md:h-28"
                    src={ProfilePlaceholder}
                    alt="placeholder"
                />
                <div className="md:basis-10/12 flex flex-col items-center md:items-start my-4 md:my-0 md:mx-4">
                    <h2
                        className="text-lg font-bold
                        md:text-xl"
                    >
                        Nama
                    </h2>
                    <p
                        className="text-sm
                        md:text-base"
                    >
                        Wallet Address
                    </p>
                </div>
                <p
                    className="text-center text-xs 
                    md:self-start md:text-right md:basis-1/12 md:text-sm
                    "
                >
                    Status
                </p>
            </div>
            <div className="divider"></div>
            <div className="grid grid-cols-1 gap-6 font-bold text-xs sm:text-lg md:grid-cols-2 md:grid-rows-2 md:gap-4 items-center">
                <div className="col-span-1">
                    <p>Total Donasi</p>
                    <div className="text-3xl">
                        <p>15</p>
                        <p className="text-[15px] leading-none">USDC</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <p>Total Pendapatan</p>
                    <div className="text-3xl">
                        <p>2000</p>
                        <p className="text-[15px] leading-none">USDC</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <p>Campaign Yang Didonasi</p>
                    <div className="text-3xl">
                        <p>2</p>
                        <p className="text-[15px] leading-none">Campaign</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <p>Campaign Yang Dibuat</p>
                    <div className="text-3xl">
                        <p>2</p>
                        <p className="text-[15px] leading-none">Campaign</p>
                    </div>
                </div>
            </div>
            <button
                className="
                    mt-4 self-end bg-[#007BC7] text-xs w-full p-2 border border-[2px] border-[#007BC7] text-white font-bold rounded-[5px]
                    md:text-xl md:p-4 md:rounded-[10px]"
            >
                Cabut Verifikasi
            </button>
        </div>
    );
};

export default UserDetail;
