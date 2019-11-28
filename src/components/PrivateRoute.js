import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../service/auth';

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route 
      {...rest} 
      render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect 
          to={{
            pathname: '/',
            state: { message: 'Usuário não autorizado!' }
          }}
        />
      )}
    />
  );
}

export default PrivateRoute;