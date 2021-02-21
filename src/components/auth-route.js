import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userUserContext } from '../contexts/user-context';

const AuthRoute = ({ auth, ...props }) => {
  const { user } = userUserContext();

  if (auth && !user) {
    return <Redirect to="signin" />;
  }
  return <Route {...props} />;
};

export default AuthRoute;
