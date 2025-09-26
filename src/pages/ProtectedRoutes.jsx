import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

export const ProtectedRoutes = () =>{

    const { isLoggedIn } = useAuth();

    return isLoggedIn ? <Outlet /> : <Navigate to='/login' />

}