import Thumbnail from '../../../image/placeholder.svg';

const KYC = () => {
    return (
        <div className="flex flex-col">
            <p className="font-bold text-xs md:text-lg">KYC</p>
            <div className="mt-2">
                <p className="text-xs md:text-lg">No. KTP</p>
                <input
                    className="
                        text-xs p-2 w-full rounded-[5px] border border-gray-300 hover:bg-gray-100 hover:text-gray-700 focus:outline-none
                        md:text-xl md:p-4 md:rounded-[10px]"
                    type="text"
                />
            </div>
            <div className="mt-4 flex flex-col md:flex-row gap-4">
                <div>
                    <p className="text-xs md:text-lg">
                        Upload
                        <br />
                        KTP
                    </p>
                    <label
                        htmlFor="dropzone-file"
                        className={`hover:brightness-90 shrink-0 md:h-40 md:w-40 h-28 w-full bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-[10px] cursor-pointer`}
                    >
                        <div className="w-full h-full flex flex-col items-center justify-center rounded-[10px]">
                            <svg
                                aria-hidden="true"
                                className="w-10 h-10 text-gray-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                ></path>
                            </svg>
                            <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                            />
                        </div>
                    </label>
                </div>
                <div>
                    <p className="text-xs md:text-lg">
                        Upload
                        <br />
                        Foto Diri
                    </p>
                    <label
                        htmlFor="dropzone-file"
                        className={`hover:brightness-90 shrink-0 md:h-40 md:w-40 h-28 w-full bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-[10px] cursor-pointer`}
                    >
                        <div className="w-full h-full flex flex-col items-center justify-center rounded-[10px]">
                            <svg
                                aria-hidden="true"
                                className="w-10 h-10 text-gray-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                ></path>
                            </svg>
                            <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                            />
                        </div>
                    </label>
                </div>
                <div>
                    <p className="text-xs md:text-lg">
                        Upload
                        <br />
                        KTP & Foto Diri
                    </p>
                    <label
                        htmlFor="dropzone-file"
                        className={`hover:brightness-90 shrink-0 md:h-40 md:w-40 h-28 w-full bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-[10px] cursor-pointer`}
                    >
                        <div className="w-full h-full flex flex-col items-center justify-center rounded-[10px]">
                            <svg
                                aria-hidden="true"
                                className="w-10 h-10 text-gray-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                ></path>
                            </svg>
                            <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                            />
                        </div>
                    </label>
                </div>
            </div>
            <div className="flex flex-row gap-4 items-center mt-4">
                <button
                    className="
                    basis-1/2 self-end bg-[#007BC7] text-xs w-full p-2 border border-[2px] border-[#007BC7] text-white font-bold rounded-[5px]
                    md:text-xl md:p-4 md:rounded-[10px]"
                >
                    Verifikasi
                </button>
                <p className="basis-1/2 text-xs md:text-lg">
                    Status verifikasi
                </p>
            </div>
        </div>
    );
};

export default KYC;
