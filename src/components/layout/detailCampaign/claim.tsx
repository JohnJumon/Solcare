const Refund = () => {
    return (
        <div
            className="
            flex flex-col mt-2
            md:mt-6 text-justify"
        >
            <h2
                className="
                text-xs font-bold mb-1
                md:text-xl md:mb-2"
            >
                Klaim
            </h2>
            <p
                className="
                text-[8px] mb-2
                md:text-[15px] md:mb-4"
            >
                Kamu telah berkontribusi pada campaign sebanyak:
            </p>
            <p
                className="
                text-base leading-none text-center mb-2
                md:text-3xl md:mb-4"
            >
                <b>
                    100
                    <span
                        className="
                    text-[8px]
                    md:text-[15px]"
                    >
                        USDC
                    </span>
                </b>
            </p>
            <p
                className="
                text-[6px] mb-2
                md:text-[12px] md:mb-4"
            >
                Silahkan menekan tombol dibawah untuk klaim kembali donasi yang
                telah kamu berikan.
            </p>
            <button
                className="
                    bg-[#007BC7] text-xs w-full h-8 text-white font-bold rounded-[5px]
                    md:text-xl md:h-16 md:rounded-[10px]"
            >
                Klaim
            </button>
        </div>
    );
};

export default Refund;
