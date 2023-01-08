const SetInfo = () => {
    return (
        <div className="flex flex-col">
            <p className="font-bold text-xs mt-8 md:text-lg">Data Diri</p>
            <div className="mt-2">
                <p className="text-xs md:text-lg">Nama Depan</p>
                <input className="
                        text-xs p-2 w-full rounded-[5px] border border-gray-300 hover:bg-gray-100 hover:text-gray-700 focus:outline-none
                        md:text-xl md:p-4 md:rounded-[10px]" type="text" />
            </div>
            <div className="mt-2">
                <p className="text-xs md:text-lg">Nama Belakang</p>
                <input className="
                        text-xs p-2 w-full rounded-[5px] border border-gray-300 hover:bg-gray-100 hover:text-gray-700 focus:outline-none
                        md:text-xl md:p-4 md:rounded-[10px]" type="text" />
            </div>
            <div className="mt-2">
                <p className="text-xs md:text-lg">E-mail</p>
                <input className="
                        text-xs p-2 w-full rounded-[5px] border border-gray-300 hover:bg-gray-100 hover:text-gray-700 focus:outline-none
                        md:text-xl md:p-4 md:rounded-[10px]" type="text" />
            </div>
            <div className="mt-2">
                <p className="text-xs md:text-lg">Gender</p>
                <div className="flex">
                    <div className="flex items-center mr-4">
                        <input id="m-radio" type="radio" value="Pria" name="gender-radio-group" className="w-2 h-2 md:w-4 md:h-4 text-[#007BC7] bg-gray-100 border-gray-300"/>
                            <label htmlFor="m-radio" className="ml-2 text-xs md:text-lg">Pria</label>
                    </div>
                    <div className="flex items-center mr-4">
                        <input id="f-radio" type="radio" value="Wanita" name="gender-radio-group" className="w-2 h-2 md:w-4 md:h-4 text-[#007BC7] bg-gray-100 border-gray-300"/>
                            <label htmlFor="f-radio" className="ml-2 text-xs md:text-lg">Wanita</label>
                    </div>
                </div>
            </div>
            <button className="
                    mt-4 self-end bg-[#007BC7] text-xs w-full p-2 border border-[2px] border-[#007BC7] text-white font-bold rounded-[5px]
                    md:text-xl md:p-4 md:rounded-[10px]">
                Simpan Data
            </button>

        </div>
    );
};

export default SetInfo;