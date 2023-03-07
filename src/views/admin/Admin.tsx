import AdminDrawer from '../../components/layout/admin/adminDrawer';
const Admin = (props: any) => {
    return (
        <main className="max-w-screen-xl mx-auto pl-0 lg:pl-12 text-black">
            <AdminDrawer page={props.page}>{props.children}</AdminDrawer>
        </main>
    );
};

export default Admin;
