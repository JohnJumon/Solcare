import TransactionInfo from './info/transactionInfo';

const HistoryCard = (props: any) => {
    const data = props.data;

    const showFormattedDate = (date:number) => {
        const dateFormat = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };
        return new Date(date).toLocaleDateString('id-ID', dateFormat);
      };

    
    return (
        <div className="my-2 flex flex-col text-xs sm:text-lg font-bold">
            <div className="bg-white rounded-t-[5px] sm:rounded-t-[10px]">
                <p className="line-clamp-1 p-2 sm:p-4">{showFormattedDate(data.createdAt * 1000)}</p>
            </div>
            <div className="flex flex-col">
                <TransactionInfo data={data}/>
            </div>
        </div>
    );
};

export default HistoryCard;
