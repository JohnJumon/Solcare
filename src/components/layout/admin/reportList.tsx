import ReportTable from "./table/reportTable";

interface ReportListProps {
    changePage: (page: string, status: string) => void
}

const ReportList: React.FC<ReportListProps> = (props) => {
    return (
        <div>
            <ReportTable changePage={props.changePage} />
        </div>
    );
};

export default ReportList;