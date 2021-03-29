import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//will allow access to user list of products and allow user to list new product in marketplace
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route 
    {...rest} 
    render={() => {
      if (localStorage.getItem('token')) {
        return <Component />
      }
      else {
        return <Redirect to='/'/>
      }
    }}
    />
  )
}

export default PrivateRoute;