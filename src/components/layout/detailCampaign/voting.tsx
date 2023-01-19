import { web3 } from '@project-serum/anchor';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSmartContract } from '../../../context/connection';
import { API_BASE_URL, getDerivedAccount, PROPOSAL_SEED } from '../../../utils';

const Voting = ({ campaignAddress }: { campaignAddress: web3.PublicKey }) => {
    const [url, setUrl] = useState('');
    const { smartContract } = useSmartContract();

    useEffect(() => {
        const proposalDerivedAccount = getDerivedAccount(
            [PROPOSAL_SEED, campaignAddress],
            smartContract.programId
        );

        axios
            .get(
                API_BASE_URL +
                    '/v1/campaign/proposal/' +
                    proposalDerivedAccount.publicKey.toBase58()
            )
            .then((e) => {
                setUrl(e.data.data.url);
            })
            .catch((e) => {
                console.log('Error: ', e);
            });
    }, []);

    return (
        <div>
            <div
                className="
            flex flex-col mt-2
            md:mt-6"
            >
                <h2
                    className="
                text-xs font-bold mb-1
                md:text-xl md:mb-2"
                >
                    Voting
                </h2>
                <button
                    onClick={(e) => {
                        window.open(
                            API_BASE_URL + '/resources/' + url,
                            '_blank'
                        );
                    }}
                    className="
                    border-solid border-2 border-[#007BC7] text-xs w-full h-8 text-[#007BC7] font-normal rounded-[5px] flex flex-row items-center hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
                    md:text-xl md:h-16 md:rounded-[10px] md:border-2"
                >
                    <svg
                        className="
                            w-5 h-5 ml-2 mr-1
                            md:w-8 md:h-8 md:ml-4 md:mr-2"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M15.475,6.692l-4.084-4.083C11.32,2.538,11.223,2.5,11.125,2.5h-6c-0.413,0-0.75,0.337-0.75,0.75v13.5c0,0.412,0.337,0.75,0.75,0.75h9.75c0.412,0,0.75-0.338,0.75-0.75V6.94C15.609,6.839,15.554,6.771,15.475,6.692 M11.5,3.779l2.843,2.846H11.5V3.779z M14.875,16.75h-9.75V3.25h5.625V7c0,0.206,0.168,0.375,0.375,0.375h3.75V16.75z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <p className="line-clamp-1">proposal.pdf</p>
                </button>
                <div
                    className="
                w-full flex flex-row items-center justify-between mt-2 text-xs font-bold text-white
                md:mt-4 md:text-xl"
                >
                    <button className="basis-3/6 bg-red-600 h-8 rounded-[5px] mr-[2px] md:h-16 md:rounded-[10px] md:mr-[6px]">
                        Tidak
                    </button>
                    <button className="basis-3/6 bg-green-600 h-8 rounded-[5px] ml-[2px] md:h-16 md:rounded-[10px] md:ml-[6px]">
                        Setuju
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Voting;
