import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    let location = useLocation();
    if(loading){
        return <Spinner animation="grow" variant="danger" />
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={ {from: location}} replace></Navigate>
};

export default PrivateRoute;