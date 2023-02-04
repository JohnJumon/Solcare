import { now } from '../../../utils';

const CollectedFund = (props: any) => {
    let content = props.campaign;
    const countRemainingTime = () => {
        const remainingTime = Math.max(
            content.createdAt + content.duration - now(),
            0
        );
        return remainingTime;
    };

    const showRemainingDays = () => {
        const DAY_IN_SECOND = 60 * 60 * 24;

        if (countRemainingTime() > 0) {
            if (countRemainingTime() > DAY_IN_SECOND) {
                return Math.floor(countRemainingTime() / DAY_IN_SECOND);
            } else {
                return '< 1';
            }
        } else {
            return '0';
        }
    };
    return (
        <div
            className="
            mb-[3px]
            md:mb-3"
        >
            <p
                className="
                text-base leading-none
                md:text-3xl"
            >
                <b>
                    {content.collected}
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
                text-[8px]
                md:text-[15px]"
            >
                Dana terkumpul dari{' '}
                <b className="text-xl">
                    {content.target}
                    <span className="text-[7.5px]">USDC</span>
                </b>
            </p>
            
            {content.collected === content.target ? (
                <></>
            ) : (
                <div
                    className="
            mb-[3px]
            md:mb-[9px]"
                >
                    <p
                        className="
                text-md leading-none
                md:text-3xl"
                    >
                        <b>{showRemainingDays()}</b>
                    </p>
                    <p
                        className="
                text-[8px]
                md:text-[15px]"
                    >
                        Hari tersisa
                    </p>
                </div>
            )}
        </div>
    );
};

export default CollectedFund;
