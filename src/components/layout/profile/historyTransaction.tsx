import React, { useEffect, useState } from 'react';
import HistoryCard from './card/historyCard';
import axios from 'axios';
import { API_BASE_URL } from '../../../utils';
import { useWallet } from '@solana/wallet-adapter-react';

interface HistoryProps {
    signature: string;
    userAddress: string;
    campaignAddress: string;
    createdAt: number;
    amount: number;
    type: number;
}

const HistoryTransaction = () => {
    let today = new Date();
    const { publicKey } = useWallet();
    const [currentDateFrom, setCurrentDateFrom] = useState(
        today.toISOString().substring(0, 10)
    );
    const [currentDateTo, setCurrentDateTo] = useState(
        today.toISOString().substring(0, 10)
    );

    const handleDateFrom = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentDateFrom(event.target.value);
    };

    const handleDateTo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentDateTo(event.target.value);
    };

    const generateCard = (count: number) => {
        let components = [];
        for (let i = 0; i < count; i++) {
            components.push(<HistoryCard />);
        }
        return components;
    };

    const [historyData, setHistoryData] = useState<HistoryProps>();

    const fetchHistory = async() => {
        const resp = await axios.get(`${API_BASE_URL}/v1/transaction/${publicKey}`)
        if (resp.data.status === 200) {
            setHistoryData(resp.data.data);
        }
    } 

    useEffect(() => {
        fetchHistory();
    }, []);

    if (historyData === undefined) {
        return <progress className="progress w-[90%] flex mx-auto my-20" />;
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row">
                <div className="flex flex-row sm:basis-4/5 max-[369px]:flex-col max-[639px]:mb-2">
                    <div className="basis-1/2">
                        <p className="text-left font-bold text-xs sm:text-lg">
                            Dari Tanggal
                        </p>
                        <input
                            className="
                        text-xs text-center p-2 w-full rounded-[5px] border border-gray-300 hover:bg-gray-100 hover:text-gray-700 focus:outline-none
                        sm:text-xl sm:p-4 sm:rounded-[10px]"
                            type="date"
                            defaultValue={currentDateFrom}
                            max={today.toISOString().substring(0, 10)}
                            onChange={handleDateFrom}
                        />
                    </div>
                    <div className="max-[369px]:mt-2 basis-1/2 min-[369px]:ml-2">
                        <p className="text-left font-bold text-xs sm:text-lg">
                            Sampai Tanggal
                        </p>
                        <input
                            className="
                    text-xs text-center p-2 w-full rounded-[5px] border border-gray-300 hover:bg-gray-100 hover:text-gray-700 focus:outline-none
                    sm:text-xl sm:p-4 sm:rounded-[10px]"
                            type="date"
                            defaultValue={currentDateTo}
                            max={today.toISOString().substring(0, 10)}
                            onChange={handleDateTo}
                        />
                    </div>
                </div>
                <button
                    className="
                    sm:ml-2 sm:basis-1/5 self-end bg-[#007BC7] text-xs w-full p-2 border border-[2px] border-[#007BC7] text-white font-bold rounded-[5px]
                    sm:text-xl sm:p-4 sm:rounded-[10px]"
                >
                    Cari
                </button>
            </div>
            <p className="text-left font-bold text-xs mt-2 sm:text-lg sm:mt-4">
                Daftar Transaksi
            </p>
            <div className="flex flex-col">{generateCard(5)}</div>
        </div>
    );
};

export default HistoryTransaction;
