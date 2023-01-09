const Donation = () => {
    return (
        <div
            className="
            flex flex-col mt-2
            md:mt-6"
        >
            <h2
                className="
                text-xs font-bold mb-1
                md:text-xl md:mb-2"
            >
                Donasi
            </h2>
            <div
                className="
                w-full flex flex-row items-center mb-2
                md:mb-4"
            >
                <input
                    className="
                    text-xs basis-11/12 text-center p-2 mr-2 min-w-[100px] rounded-[5px] border border-gray-300 hover:bg-gray-100 hover:text-gray-700 focus:outline-none
                    md:text-xl md:p-4 md:mr-4 md:rounded-[10px]"
                    type="number"
                    min="1"
                />
                <p
                    className="
                    basis-1/12 text-xs font-bold text-center
                    md:text-xl"
                >
                    USDC
                </p>
            </div>
            <button
                className="
                    bg-[#007BC7] text-xs w-full h-8 text-white font-bold rounded-[5px]
                    md:text-xl md:h-16 md:rounded-[10px]"
            >
                Donasikan Sekarang
            </button>
        </div>
    );
};

export default Donation;
