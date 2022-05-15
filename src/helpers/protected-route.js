// import React from "react";
// import PropTypes from 'prop-types';
// import { Route, Navigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

// export default function ProtectedRoute({user, children, ...rest}) {
//   return (
//     <Route
//       {...rest}
//       render={( { location }) => {
//         if (user) {
//           return React.cloneElement(children, { user });
//         }

//         if (!user) {
//           return (
//             <Navigate
//               to={{
//                 pathname: ROUTES.LOGIN,
//                 state: { from: location}
//               }}
//               replace 
//             />
//           )
//         }

//         return null;
//       }}
//      />
//   );
// }

import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuthListener from '../hooks/use-auth-listener';
const ProtectedRoute = ({user}) => {
  let location = useLocation();
 // const { user } = useAuthListener();
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    console.log('what is it ', user);
    return user ? <Outlet /> : <Navigate to={{ pathname: ROUTES.LOGIN, state: { from: location } }} />;
}

export default ProtectedRoute;
// ProtectedRoute.propTypes = {
//   user: PropTypes.object,
//   children: PropTypes.object.isRequired
// };