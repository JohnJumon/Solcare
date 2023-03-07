import { Link } from "react-router-dom";

const ReportActions = (props: any) => {
    return (
        <div className="flex flex-row justify-center">
            <Link
                to={`/admin/manage-laporan/detail/${props.id}`}
                className="hover:stroke-[#007BC7] stroke-black"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.5 25C20.299 25 25 20.299 25 14.5C25 8.70101 20.299 4 14.5 4C8.70101 4 4 8.70101 4 14.5C4 20.299 8.70101 25 14.5 25Z"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M21.9238 21.9248L27.9989 27.9999"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </Link>
            <button className="ml-2 hover:stroke-[#007BC7] stroke-black">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.97949 12.4644H3.97949V7.46436"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M8.22213 23.7782C9.76051 25.3166 11.7205 26.3642 13.8543 26.7886C15.9881 27.2131 18.1998 26.9952 20.2098 26.1627C22.2198 25.3301 23.9378 23.9202 25.1465 22.1113C26.3552 20.3023 27.0003 18.1756 27.0003 16C27.0003 13.8244 26.3552 11.6977 25.1465 9.88873C23.9378 8.07979 22.2198 6.66989 20.2098 5.83733C18.1998 5.00477 15.9881 4.78693 13.8543 5.21137C11.7205 5.6358 9.76051 6.68345 8.22213 8.22183L3.97949 12.4645"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
            <button className="ml-2 hover:stroke-[#007BC7] stroke-black">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5.5 17.9091V6.5C5.5 6.23478 5.60536 5.98043 5.79289 5.79289C5.98043 5.60536 6.23478 5.5 6.5 5.5H25.5C25.7652 5.5 26.0196 5.60536 26.2071 5.79289C26.3946 5.98043 26.5 6.23478 26.5 6.5V25.5C26.5 25.7652 26.3946 26.0196 26.2071 26.2071C26.0196 26.3946 25.7652 26.5 25.5 26.5H16.9545"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M16 19L8 27L4 23"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
};

export default ReportActions;
