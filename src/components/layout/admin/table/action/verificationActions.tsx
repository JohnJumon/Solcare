const VerificationActions = () => {
    return (
        <div className="flex flex-row justify-center">
            <button className="hover:stroke-[#007BC7] stroke-black">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27 9.00073L13 23.0001L6 16.0007" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <button className="ml-2 hover:stroke-[#007BC7] stroke-black">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 7L7 25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M25 25L7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    );
};

export default VerificationActions;