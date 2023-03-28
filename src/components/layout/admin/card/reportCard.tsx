interface ReportCardProps {
    data: any;
}

const ReportCard: React.FC<ReportCardProps> = (props) => {
    return (
        <div className="p-2 md:p-4 my-2 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,123,199,0.25)] hover:shadow-[0px_10px_10px_0px_rgba(0,123,199,0.5)]">
            <p className="text-xs md:text-lg font-bold">{props.data.reporter}</p>
            <p className="text-[8px] md:text-base">{props.data.reporter}</p>
            <br />
            <p className="text-[8px] md:text-base">{props.data.description}</p>
        </div>
    );
};

export default ReportCard;
