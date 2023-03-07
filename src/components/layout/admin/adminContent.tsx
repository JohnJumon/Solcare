import UserVerification from './userVerification';
import UserList from './userList';
import ReportList from './reportList';
import CampaignValidation from './campaignValidation';
import ReportDetail from './reportDetail';
import UserDetail from './userDetail';
import Dashboard from './dashboard';
interface AdminContentProps {
    // handleClick: () => void;
    page: string;
    // changePage: (page: string, status: string) => void;
}
const AdminContent: React.FC<AdminContentProps> = (props) => {
    const generatePage = () => {
        if (props.page == 'Dashboard') {
            return <Dashboard />;
        }
        if (props.page == 'Verifikasi User') {
            return <UserVerification />;
        }
        if (props.page == 'Manajemen User') {
            // return <UserList changePage={props.changePage} />;
        }
        if (props.page == 'Campaign') {
            return <CampaignValidation />;
        }
        if (props.page == 'Laporan') {
            // return <ReportList changePage={props.changePage} />;
        }
        if (props.page == 'Detail Laporan') {
            return <ReportDetail />;
        }
        if (props.page == 'Detail User') {
            return <UserDetail />;
        }
    };
    return (
        <div>{generatePage()}</div>
        // <div className="flex flex-col w-full">
        //     <div className="flex flex-row items-center mb-2">
        //         <button
        //             onClick={props.handleClick}
        //             className="drawer-button lg:hidden p-0 m-2 ml-0 bg-none"
        //         >
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 fill="none"
        //                 viewBox="0 0 24 24"
        //                 className="text-[#007BC7] inline-block w-6 h-6 stroke-current"
        //             >
        //                 <path
        //                     stroke-linecap="round"
        //                     stroke-linejoin="round"
        //                     stroke-width="2"
        //                     d="M4 6h16M4 12h16M4 18h16"
        //                 ></path>
        //             </svg>
        //         </button>
        //         <h1 className="font-bold text-2xl lg:hidden text-[#007BC7]">
        //             {props.page}
        //         </h1>
        //     </div>
        //     {generatePage()}
        // </div>
    );
};
export default AdminContent;
