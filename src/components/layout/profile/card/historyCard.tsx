import TransactionInfo from './info/transactionInfo';

const HistoryCard = () => {
    return (
        <div className="my-2 flex flex-col text-xs sm:text-lg font-bold">
            <div className="bg-white rounded-t-[5px] sm:rounded-t-[10px]">
                <p className="line-clamp-1 p-2 sm:p-4">Tanggal Transaksi</p>
            </div>
            <div className="flex flex-col">
                <TransactionInfo />
                <TransactionInfo />
            </div>
        </div>
    );
};

export default HistoryCard;
