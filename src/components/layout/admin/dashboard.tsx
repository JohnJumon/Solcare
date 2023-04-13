import Select from 'react-select';
import { useSearchParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import PieChart from './pieChart';
import VerticalBarChart from './verticalBarChart';
import HorizontalStackedBarChart from './horizontalStackedBarChart';
import axios from 'axios';
import {
    API_BASE_URL,
    PROPOSAL_SEED,
    STATUS_ACTIVE,
    STATUS_VOTING,
    getDerivedAccount,
    now,
} from '../../../utils';
import { useSmartContract } from '../../../context/connection';
import { ACCOUNT_DISCRIMINATOR_SIZE, utils } from '@project-serum/anchor';

const options = [
    {
        label: 'Perminggu',
        value: 'weeks',
    },
    {
        label: 'Perbulan',
        value: 'months',
    },
    {
        label: 'Pertahun',
        value: 'years',
    },
];

const Dashboard = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    let filter = searchParams.get('order');

    const [totalUsers, setTotalUsers] = useState(0);
    const [totalUsersWarned, setTotalUsersWarned] = useState(0);

    const [totalReports, setTotalReports] = useState(0);
    const [totalReportedCampaigns, setTotalReportedCampaigns] = useState(0);

    const { smartContract } = useSmartContract();

    const [totalCampaigns, setTotalCampaigns] = useState(0);
    const [totalSuccessCampaign, setTotalSuccessCampaign] = useState(0);
    const [totalFailedCampaign, setTotalFailedCampaign] = useState(0);

    const fetchTotalUsers = async () => {
        const resp = await axios.get(`${API_BASE_URL}/v1/users`);
        let respData = [];
        if (resp.data.status === 200) {
            respData = resp.data.data;

            setTotalUsers(respData.length);

            let warnedUsers = 0;
            respData.forEach((e: any) => {
                if (e.isWarned === true) {
                    warnedUsers += 1;
                }
            });

            setTotalUsersWarned(warnedUsers);
        }
    };

    const fetchTotalReports = async () => {
        const resp = await axios.get(`${API_BASE_URL}/v1/report/group`);
        let respData = [];
        if (resp.data.status === 200) {
            respData = resp.data.data;

            setTotalReportedCampaigns(respData.length);

            let reportAmount = 0;
            respData.forEach((e: any) => {
                reportAmount += e.total;
            });

            setTotalReports(reportAmount);
        }
    };

    const fetchTotalCampaign = async () => {
        const resp = await axios.get(`${API_BASE_URL}/v1/campaign/summary`);
        if (resp.data.status === 200) {
            const respData = resp.data.data;

            const votingCampaigns = await smartContract.account.campaign.all([
                {
                    memcmp: {
                        offset:
                            ACCOUNT_DISCRIMINATOR_SIZE +
                            32 +
                            8 +
                            8 +
                            8 +
                            8 +
                            32,
                        bytes: utils.bytes.bs58.encode(
                            new Uint8Array([STATUS_VOTING])
                        ),
                    },
                },
            ]);
            const activeCampaigns = await smartContract.account.campaign.all([
                {
                    memcmp: {
                        offset:
                            ACCOUNT_DISCRIMINATOR_SIZE +
                            32 +
                            8 +
                            8 +
                            8 +
                            8 +
                            32,
                        bytes: utils.bytes.bs58.encode(
                            new Uint8Array([STATUS_VOTING])
                        ),
                    },
                },
            ]);

            const campaigns = [...votingCampaigns, ...activeCampaigns];

            let countFailedCampaings = 0;
            await Promise.all(
                campaigns.map(async (v) => {
                    if (v.account.status === STATUS_ACTIVE) {
                        if (
                            now() >
                            v.account.createdAt.toNumber() +
                                v.account.heldDuration.toNumber()
                        ) {
                            countFailedCampaings++;
                        }
                    } else if (v.account.status === STATUS_VOTING) {
                        const proposalDerivedAccount = getDerivedAccount(
                            [PROPOSAL_SEED, v.publicKey],
                            smartContract.programId
                        );
                        const proposal =
                            await smartContract.account.proposal.fetchNullable(
                                proposalDerivedAccount.publicKey
                            );
                        if (proposal) {
                            if (
                                v.account.fundedAmount.lte(
                                    proposal.agree.add(proposal.disagree)
                                ) ||
                                now() >
                                    proposal.createdAt.toNumber() +
                                        proposal.duration.toNumber()
                            ) {
                                if (
                                    !(
                                        proposal.agree.eqn(0) &&
                                        proposal.disagree.eqn(0)
                                    ) &&
                                    proposal.agree.lt(proposal.disagree)
                                ) {
                                    countFailedCampaings++;
                                }
                            }
                        }
                    }
                })
            );

            setTotalCampaigns(respData.totalCampaigns);
            setTotalSuccessCampaign(respData.totalSuccessCampaigns);
            setTotalFailedCampaign(
                respData.totalFailedCampaigns + countFailedCampaings
            );
        }
    };

    useEffect(() => {
        fetchTotalUsers();
        fetchTotalReports();
        fetchTotalCampaign();
    }, []);

    const handleInputChange = (e: any) => {
        searchParams.set('order', e.value);
        setSearchParams(searchParams);
    };

    if (totalCampaigns === 0) {
        return <progress className="progress w-[90%] flex mx-auto my-20" />;
    }

    return (
        <div>
            <div className="grid grid-cols-2 gap-4 sm:gap-8 sm:grid-cols-2">
                {/* <div>
                    <p className="text-xs font-bold xl:text-base">
                        Total Donasi
                    </p>
                    <p
                        className="
                    text-2xl font-bold
                    xl:text-4xl xl:my-4"
                    >
                        0{' '}
                        <span className="text-[9px] xl:text-[18px]">USDC</span>
                    </p>
                </div> */}
                <div>
                    <p className="text-xs font-bold xl:text-base">
                        Jumlah User
                    </p>
                    <p className="text-2xl font-bold xl:text-4xl xl:my-4">
                        {totalUsers}
                    </p>
                </div>
                {/*<div>
                    <p className="text-xs font-bold xl:text-base">
                        Jumlah User Diperingati
                    </p>
                    <p className="text-2xl font-bold xl:text-4xl xl:my-4">
                        {totalUsersWarned}
                    </p>
                </div>*/}

                <div>
                    <p className="text-xs font-bold xl:text-base">
                        Jumlah Campaign
                    </p>
                    <p className="text-2xl font-bold xl:text-4xl xl:my-4">
                        {totalCampaigns}
                    </p>
                </div>
                {/*<div>
                    <p className="text-xs font-bold xl:text-base">
                        Jumlah Campaign Terlapor
                    </p>
                    <p className="text-2xl font-bold xl:text-4xl xl:my-4">
                        {totalReportedCampaigns}
                    </p>
                </div>*/}

                {/*<div>
                    <p className="text-xs font-bold xl:text-base">
                        Jumlah Laporan User
                    </p>
                    <p className="text-2xl font-bold xl:text-4xl xl:my-4">
                        {totalReports}
                    </p>
                </div>*/}
            </div>
            <p className="text-xs font-bold xl:text-base my-4">
                Status Progres Campaign
            </p>
            <div className="sm:grid mt-4 sm:mt-0 sm:gap-8 sm:grid-cols-3">
                {/* <div className="sm:col-span-2 sm:grid sm:grid-cols-2 sm:items-center">
                    <div>
                        <p className="text-xs font-bold xl:text-base">
                            Jumlah Donasi
                        </p>
                        <p className="text-[6px] text-[12px]">Tahun 2023</p>
                    </div>
                    <div>
                        <Select
                            className="text-xs
                        xl:text-base"
                            options={options}
                            defaultValue={options[0]}
                            isSearchable={false}
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    padding: '4px',
                                    borderRadius: '10px',
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        borderColor: 'rgba(0, 123, 199, 1)',
                                    },
                                    '@media only screen and (min-width: 1280px)':
                                        {
                                            padding: '16px',
                                        },
                                }),
                                option: (baseStyles, state) => ({
                                    ...baseStyles,
                                    padding: '8px',
                                    backgroundColor: state.isDisabled
                                        ? undefined
                                        : state.isSelected
                                        ? 'rgba(0, 123, 199, 1)'
                                        : state.isFocused
                                        ? 'rgba(0, 123, 199, 0.3)'
                                        : undefined,
                                    '@media only screen and (min-width: 1280px)':
                                        {
                                            padding: '16px',
                                        },
                                }),
                            }}
                            onChange={(choice) => handleInputChange(choice)}
                        />
                    </div>
                    <div className="sm:col-span-2 mt-4">
                        <VerticalBarChart />
                    </div>
                </div> */}

                <div className="sm:col-span-1 items-center">
                    <PieChart
                        label={'Jumlah Campaign'}
                        title={['Sukses', 'Pending', 'Gagal']}
                        data={[
                            totalSuccessCampaign,
                            totalCampaigns -
                                totalSuccessCampaign -
                                totalFailedCampaign,
                            totalFailedCampaign,
                        ]}
                    />
                </div>
                <div className="grid grid-rows-2 gap-4">
                    <div className="grid grid-cols-3 justify-center items-end">
                        <p className="text-xs xl:text-base col-span-2 font-bold">
                            Status Peringatan User
                        </p>
                        <div className="col-span-1">
                            <HorizontalStackedBarChart
                                title={'Jumlah User'}
                                label={'User Yang Tidak Diperingati '}
                                labelWarned={'User Yang Diperingati '}
                                data={totalUsers - totalUsersWarned}
                                warnedData={totalUsersWarned}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 justify-center items-start">
                        <p className="text-xs xl:text-base col-span-2 font-bold">
                            Status Keamanan Campaign
                        </p>
                        <div className="col-span-1">
                            <HorizontalStackedBarChart
                                title={'Jumlah Campaign'}
                                label={'Campaign Yang Tidak Diperingati '}
                                labelWarned={'Campaign Yang Diperingati '}
                                data={totalCampaigns - totalReportedCampaigns}
                                warnedData={totalReportedCampaigns}
                            />
                            <HorizontalStackedBarChart legendUsage={true} />
                        </div>
                    </div>
                </div>
            </div>
            {/*<div>
                {/* <p className="text-xs font-bold xl:text-base mb-4 mt-4">
                    Aktivitas Solcare
                </p> */}
            {/*
                <div className="grid grid-cols-4">
                    <p className="text-xs xl:text-base col-span-1">
                        Jumlah User
                    </p>
                    <div className="col-span-3">
                        <HorizontalStackedBarChart
                            title={'Jumlah User'}
                            label={'User Yang Tidak Diperingati '}
                            labelWarned={'User Yang Diperingati '}
                            data={totalUsers - totalUsersWarned}
                            warnedData={totalUsersWarned}
                        />
                    </div>
                    <p className="text-xs xl:text-base col-span-1">
                        Status Keamanan Campaign
                    </p>
                    <div className="col-span-3">
                        <HorizontalStackedBarChart
                            title={'Jumlah Campaign'}
                            label={'Campaign Yang Tidak Diperingati '}
                            labelWarned={'Campaign Yang Diperingati '}
                            data={totalCampaigns - totalReportedCampaigns}
                            warnedData={totalReportedCampaigns}
                        />
                    </div>
                </div>
            </div>*/}
        </div>
    );
};

export default Dashboard;
