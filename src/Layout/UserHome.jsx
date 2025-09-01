import useAuth from "../hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth()
    return (
        <div>
            <h2>User home</h2>
            {
                user?.displayName ? user.displayName : 'Back'
            }
        </div>
    );
};

export default UserHome;