import { Navigate, NavLink, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import users from './layout-images/users.webp';
import contacts from './layout-images/contacts.webp';
import admins from './layout-images/admin.webp';
import { useAuth } from '../../store/auth';
import { toast } from 'react-hot-toast';



export const AdminLayout = () => {

    const { user, isLoading } = useAuth();

    useEffect(() => {
        if (!isLoading && !user.isAdmin) {
            toast.error("You are not admin");
        }
    }, [user, isLoading]);

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (!user.isAdmin) {
        return <Navigate to="/" />
    }

    return (
        <>

            <div className="admin-container">

                <div className='admin-users'>
                    <figure>

                        <img src={users} alt="uses" />
                    </figure>
                    <div className="users-text">
                        <p>Registered Users Data</p>
                    </div>

                    <div className="admin-btn">
                        <NavLink to="/admin/users">
                            Users
                        </NavLink>
                    </div>

                </div>

                <div className='admin-contacts'>
                    <figure>

                        <img src={contacts} alt="uses" />
                    </figure>

                    <div className="contacts-text">
                        <p>Contatcs Users Data</p>
                    </div>

                    <div className="admin-btn">
                        <NavLink to="/admin/contacts">
                            Contacts
                        </NavLink>
                    </div>

                </div>

                <div className='admin-admins'>

                    <figure>

                        <img src={admins} alt="uses" />
                    </figure>
                    <div className="admins-text">
                        <p>Admins Users Data</p>
                    </div>

                    <div className="admin-btn">
                        <NavLink to="/admin/access">
                            Admins
                        </NavLink>
                    </div>

                </div>
            </div>
            <Outlet />
        </>
    )
}


