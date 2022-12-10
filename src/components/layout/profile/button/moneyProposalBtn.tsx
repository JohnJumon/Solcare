const MoneyProposalButton = () => {
    return (
        <div className="flex flex-col">
            <label htmlFor="my-modal-4" className="text-center mt-4 self-end bg-[#007BC7] w-full text-xs p-2 border border-[2px] border-[#007BC7] text-white font-bold rounded-[5px]
                    md:text-xl md:p-4 md:rounded-[10px]">
                    Ajukan Pencairan Dana
            </label>
            <div>
                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                <label htmlFor="my-modal-4" className="modal max-[768px]:modal-bottom cursor-pointer px-0 md:px-12">
                    <label className="modal-box relative rounded-t-[10px] md:rounded-[20px] w-[54rem] max-w-screen-2xl md:max-h-screen-2xl">
                        <h1 className="text-md font-bold md:text-3xl">Pengajuan Pencairan</h1>
                        <div className="divider" />
                        <p className="text-xs md:text-xl font-bold">Upload Proposal</p>
                        <label htmlFor="dropzone-file" className={`hover:brightness-90 shrink-0 h-28 w-full bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-[10px] cursor-pointer mb-2`}>
                            <div className="w-full h-full flex flex-col items-center justify-center rounded-[10px]">
                                <svg aria-hidden="true" className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </div>
                        </label>
                        <div className="flex flex-row justify-end font-bold text-white text-center">
                            <label htmlFor="my-modal-4" className="basis-6/12 md:basis-3/12 text-[#007BC7] border-solid border-2 border-white hover:border-[#007BC7] p-2 md:p-4 text-[8px] md:text-[15px] rounded-[5px] md:rounded-[10px]">Batal</label>
                            <label className="basis-6/12 md:basis-3/12 rounded-[5px] md:rounded-[10px] p-2 md:p-4 text-[8px] md:text-[15px] ml-1 md:ml-2 bg-[#007BC7] border border-2 border-white hover:bg-[#007BC7] hover:border-[#007BC7]" onClick={() => { console.log("Send") }}>Kirim</label>
                        </div>
                    </label>
                </label>
            </div >
        </div>
    );
};

export default MoneyProposalButton;