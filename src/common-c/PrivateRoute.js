import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';




let PrivateRoute = ({ loginData, component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => {
        if(loginData && loginData.username) {
          return <Component {...props} />;
        } else {
          return <Redirect to='/login' />;
        }
    }} />
  }


  PrivateRoute = connect((state)=>({loginData : state.loginData}))(PrivateRoute);

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     return <Route {...rest} render={(props) => (<Component {...props} />)} />
//   }
export default PrivateRoute;