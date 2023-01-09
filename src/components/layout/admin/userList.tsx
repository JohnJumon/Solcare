import { defaultProps } from 'react-select/dist/declarations/src/Select';
import UserTable from './table/userTable';

interface UserListProps {
    changePage: (page: string, status: string) => void;
}
const UserList: React.FC<UserListProps> = (props) => {
    return (
        <div>
            <UserTable changePage={props.changePage} />
        </div>
    );
};

export default UserList;
