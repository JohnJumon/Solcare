import ProfilePlaceholder from '../../../image/profilePic.png';
import KYC from './kyc';
import SetInfo from './setInfo';
const AccountSetting = () => {
    return (
        <div className="flex flex-col">
            <div
                className="
                flex flex-col
                md:flex-row items-center shadow-[0px_4px_6px_2px_rgba(0,123,199,0.5)] p-8 rounded-[10px] py-8"
            >
                <label
                    htmlFor="dropzone-file"
                    className={`shrink-0 md:h-28 md:w-28 h-24 w-24 bg-[url('${ProfilePlaceholder}')] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-full cursor-pointer hover:brightness-90`}
                >
                    <svg
                        aria-hidden="true"
                        className="w-10 h-10 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                    </svg>
                    <input id="dropzone-file" type="file" className="hidden" />
                </label>
                <div className="basis-10/12 shrink flex flex-col items-center md:items-start my-4 md:my-0 md:mx-4">
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
                    className="basis-1/12 shrink-0 text-center text-xs 
                    md:self-start md:text-right md:text-sm
                    "
                >
                    Status
                </p>
            </div>
            <div className="divider"></div>
            <KYC />
            <SetInfo />
        </div>
    );
};

export default AccountSetting;
