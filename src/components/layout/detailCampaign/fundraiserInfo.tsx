import { useEffect, useState } from 'react';
import ProfilePlaceholder from '../../../image/profilePic.png';

const FundraiserInfo = (props: any) => {
    const [initializing, setInitializing] = useState(true);

    useEffect(() => {
        setInitializing(false);
    }, []);

    const fundraiserName = '';
    const fundraiserEmail = '';

    if (initializing === true) {
        return null;
    }
    return (
        <div
            className="
            mt-2
            md:mt-4"
        >
            <h2
                className="
                mb-2 text-xs font-bold
                md:hidden"
            >
                Info Fundraiser
            </h2>
            <div
                className="
                flex flex-row items-center
                md:flex-col"
            >
                <div
                    className="
                    flex flex-col items-center mr-2 pr-1
                    md:mr-0 md:pr-0"
                >
                    <img
                        className="
                        w-8 h-8 rounded-full
                        md:w-32 md:h-32"
                        src={ProfilePlaceholder}
                        alt="placeholder"
                    />
                    <p
                        className="
                        text-[8px]
                        md:text-[15px]"
                    >
                        Status
                    </p>
                </div>
                <div
                    className="
                    flex flex-col pl-1
                    md:pl-0 md:self-start"
                >
                    <p
                        id="address-tag"
                        className="
                        text-xs font-bold
                        md:text-xl"
                    >
                        {/* Nama Fundraiser */}
                        {fundraiserName === ''
                            ? props.campaign.ownerAddress
                            : fundraiserName}
                    </p>
                    <p
                        id="address-tag"
                        className="
                        text-[8px]
                        md:text-[15px]"
                    >
                        {/* Wallet Fundraiser */}
                        {props.campaign.ownerAddress}
                    </p>
                    <p
                        className="
                        text-[8px]
                        md:text-[15px]"
                    >
                        {/* E-mail Fundraiser */}
                        {fundraiserEmail === ''
                            ? 'Email : -'
                            : fundraiserEmail}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FundraiserInfo;
