import Select from 'react-select';
import { useSearchParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import PieChart from './pieChart';
import VerticalBarChart from './verticalBarChart';
import HorizontalStackedBarChart from './horizontalStackedBarChart';
import axios from 'axios';
import { API_BASE_URL } from '../../../utils';

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
    const [totalWarnedUsers, setTotalWarnedUsers] = useState(0);
    const [totalReports, setTotalReports] = useState(0);
    const [totalReportedCampaign, setTotalReportedCampaign] = useState(0);

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
            setTotalWarnedUsers(warnedUsers);
        }
    };

    const fetchTotalReports = async () => {
        const resp = await axios.get(`${API_BASE_URL}/v1/report/group`);
        let respData = [];
        if (resp.data.status === 200) {
            respData = resp.data.data;

            setTotalReportedCampaign(respData.length);

            let reportAmount = 0;
            respData.forEach((e: any) => {
                reportAmount += e.total;
            });

            setTotalReports(reportAmount);
        }
    };

    useEffect(() => {
        fetchTotalUsers();
        fetchTotalReports();
    }, []);

    const handleInputChange = (e: any) => {
        searchParams.set('order', e.value);
        setSearchParams(searchParams);
    };
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 sm:gap-8 sm:grid-cols-3">
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
                        Total Campaign
                    </p>
                    <p
                        className="
                    text-2xl font-bold
                    xl:text-4xl xl:my-4"
                    >
                        X
                    </p>
                </div>
                <div>
                    <p className="text-xs font-bold xl:text-base">Total User</p>
                    <p
                        className="
                    text-2xl font-bold
                    xl:text-4xl xl:my-4"
                    >
                        {totalUsers}
                    </p>
                </div>
                <div>
                    <p className="text-xs font-bold xl:text-base">
                        Total User Diperingati
                    </p>
                    <p
                        className="
                    text-2xl font-bold
                    xl:text-4xl xl:my-4"
                    >
                        {totalWarnedUsers}
                    </p>
                </div>
                <div>
                    <p className="text-xs font-bold xl:text-base">
                        Total Laporan User
                    </p>
                    <p
                        className="
                    text-2xl font-bold
                    xl:text-4xl xl:my-4"
                    >
                        {totalReports}
                    </p>
                </div>
                <div>
                    <p className="text-xs font-bold xl:text-base">
                        Total Campaign Terlapor
                    </p>
                    <p
                        className="
                    text-2xl font-bold
                    xl:text-4xl xl:my-4"
                    >
                        {totalReportedCampaign}
                    </p>
                </div>
            </div>
            <div className="sm:grid mt-4 sm:mt-0 sm:gap-8 sm:grid-cols-3">
                <div className="sm:col-span-2 sm:grid sm:grid-cols-2 sm:items-center">
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
                </div>
                <div>
                    <p className="text-xs font-bold xl:text-base mb-4">
                        Persentase Campaign
                    </p>
                    <PieChart />
                </div>
            </div>
            <div>
                <p className="text-xs font-bold xl:text-base mb-4 mt-4">
                    Aktivitas Hari Ini
                </p>
                <div className="grid grid-cols-4">
                    <p className="text-xs xl:text-base col-span-1">
                        Jumlah Donasi
                    </p>
                    <div className="col-span-3">
                        <HorizontalStackedBarChart title={'Jumlah Donasi'} />
                    </div>
                    <p className="text-xs xl:text-base col-span-1">
                        Jumlah Campaign
                    </p>
                    <div className="col-span-3">
                        <HorizontalStackedBarChart title={'Jumlah Campaign'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
