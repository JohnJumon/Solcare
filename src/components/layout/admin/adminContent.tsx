import UserVerification from './userVerification';
import UserList from './userList';
import ReportList from './reportList';
import CampaignValidation from './campaignValidation';
import ReportDetail from './reportDetail';
import UserDetail from './userDetail';
import Dashboard from './dashboard';
interface AdminContentProps {
    page: string;
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
            return <UserList />;
        }
        if (props.page == 'Verifikasi Kesuksesan Campaign') {
            return <CampaignValidation />;
        }
        if (props.page == 'Pengaduan') {
            return <ReportList />;
        }
        if (props.page == 'Detail Pengaduan') {
            return <ReportDetail />;
        }
        if (props.page == 'Detail User') {
            return <UserDetail />;
        }
    };
    return <div>{generatePage()}</div>;
};
export default AdminContent;
