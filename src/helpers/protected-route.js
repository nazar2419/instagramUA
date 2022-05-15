import * as ROUTES from '../constants/routes';
import PropTypes from 'prop-types';
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = ({user}) => {
  let location = useLocation();
    return user ? <Outlet /> : <Navigate to={{ pathname: ROUTES.LOGIN, state: { from: location } }} />;
}

export default ProtectedRoute;
ProtectedRoute.propTypes = {
  user: PropTypes.object,
};