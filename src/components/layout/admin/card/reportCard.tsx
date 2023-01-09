interface ReportCardProps {
    number: number;
}

const ReportCard: React.FC<ReportCardProps> = (props) => {
    return (
        <div className="p-2 md:p-4 my-2 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,123,199,0.25)] hover:shadow-[0px_10px_10px_0px_rgba(0,123,199,0.5)]">
            <p className="text-xs md:text-lg font-bold">Nama {props.number}</p>
            <p className="text-[8px] md:text-base">Wallet {props.number}</p>
            <br />
            <p className="text-[8px] md:text-base">Deskripsi laporan</p>
        </div>
    );
};

export default ReportCard;
