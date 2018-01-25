import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { HashRouter, Switch } from 'react-router-dom';
import AdminRoute  from './Route_Admin';
import PrivateRoute  from './common-c/PrivateRoute';
import LoginComponet from './common-c/Login';
import { LOGIN_ACTION } from './actions/loginLogout_action';

const fetchLogin = (data) => {  
  return { type : LOGIN_ACTION , payload: data};
}




let RootApp = ({alert, fetchLogin}) => {
    const loginData = localStorage.getItem('loginData');    
    if(loginData) {
      fetchLogin(JSON.parse(loginData));
   }    
   return (
      <div>
        <HashRouter>
            <Switch>                  
              <PrivateRoute path='/admin' component={AdminRoute} /> 
              <Route path='/login' component={LoginComponet}></Route>
              <Route path='/**' component={LoginComponet}></Route>             
            </Switch>
        </HashRouter>
      </div>
    );
}

export default connect((state)=>{ return {alert: state.alertData}}, {fetchLogin})(RootApp);
