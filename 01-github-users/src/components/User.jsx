import Profile from './Profile';
import Followers from './Followers';

const User = () => {
    return (
        <section className='dashboard-user'>
            <div className='user-container'>
                <Profile />
                <Followers />
            </div>
        </section>
    );
};

export default User;
