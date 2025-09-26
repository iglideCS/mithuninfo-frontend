import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

export const LoginProtectedRoute = () =>{

    const { isLoggedIn } = useAuth();

    return isLoggedIn ? <Navigate to='/' /> : <Outlet />;

}
