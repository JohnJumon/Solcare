import ProfileDrawer from '../components/layout/profile/profileDrawer';
const Profile = (props: any) => {
    return (
        <main className="max-w-screen-xl mx-auto pl-0 lg:pl-12 text-black">
            <ProfileDrawer>{props.children}</ProfileDrawer>
        </main>
    );
};

export default Profile;
