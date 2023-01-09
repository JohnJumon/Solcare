interface UserActionsProps {
    changePage: (page: string, status: string) => void;
}

const UserActions: React.FC<UserActionsProps> = (props) => {
    return (
        <div className="flex flex-row justify-center">
            <button
                onClick={() => {
                    props.changePage('Detail User', '');
                }}
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
                        d="M25 7L7 25"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M25 25L7 7"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
};

export default UserActions;
