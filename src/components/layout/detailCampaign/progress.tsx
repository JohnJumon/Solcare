const Progress = (props: any) => {
    let content = props.campaign;
    return (
        <div
            className="
            grid grid-cols-5 gap-2 items-center mb-[3px]
            md:mb-3"
        >
            <div
                className="
                        col-span-4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700
                        md:h-4"
            >
                <div
                    className="
                            bg-[#007BC7] h-2.5 rounded-full
                            md:h-4"
                    style={{
                        width:
                            Math.min(
                                100,
                                (content.collected / content.target) * 100
                            ).toString() + '%',
                    }}
                />
            </div>
            <p
                className="
                        font-bold text-md text-center
                        md:text-3xl"
            >
                {Math.min(100, (content.collected / content.target) * 100)}%
            </p>
        </div>
    );
};

export default Progress;
