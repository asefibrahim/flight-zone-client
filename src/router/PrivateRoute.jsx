import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className='text center '>
            <p className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400 mx-auto mt-28  "></p>
        </div>
    }

    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;