/* eslint-disable react/jsx-props-no-spreading, react/no-unstable-nested-components, @typescript-eslint/ban-ts-comment */
import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

import { userSelectors } from '../store/users/user-selectors';
import { NOT_FOUND_ROUTE, USER_LOGIN_ROUTE } from './route-path';

export function PrivateRoute({ deactivate, path, element: Component }) {
  const { isAuthenticated } = useSelector(userSelectors.userInfo);

  if (deactivate) {
    return <Route path={path} element={<Navigate to={NOT_FOUND_ROUTE} />} />;
  }

  return (
    <Route
      path={path}
      // @ts-ignore: Unreachable code error
      element={(properties) =>
        isAuthenticated ? (
          // @ts-ignore: Unreachable code error
          <Component {...properties} />
        ) : (
          <Navigate to={USER_LOGIN_ROUTE} />
        )
      }
    />
  );
}
