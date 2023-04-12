import Thumbnail from '../../../image/placeholder.svg';


const KYCGuide = () => {
    return (
        <div
            className="max-w-screen-xl mx-auto mt-2 md:mt-6"
        >
            <div className="flex flex-row items-center mb-2 md:mb-6 justify-between">
                <h1
                    className="
                    text-md font-bold
                    md:text-3xl"
                >
                    Kriteria Pengambilan Gambar KYC
                </h1>
                
            </div>
            <div className="w-[50%] h-[100%] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,123,199,0.25)] hover:shadow-[0px_10px_10px_0px_rgba(0,123,199,0.5)]">
                <img
                    className="w-full h-[200px] object-cover rounded-[20px] xl:max-h-[100px]"
                    src={Thumbnail}
                />
                <div className="p-6">
                    <h1 className="line-clamp-1 text-md font-bold my-2 xl:text-2xl xl:my-4">
                        Title
                    </h1>

                </div>
            </div>
        </div>
    );
}

export default KYCGuide;