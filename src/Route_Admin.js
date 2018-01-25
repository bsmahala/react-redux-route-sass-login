import React from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import bodyComponent from './components';
import { logout } from './actions/loginLogout_action';

const AdminRoute = ({match, logout, history}) => {
  
  return (
          <div>
            <header>
              <nav className="menu">
                <section className="tabs">
                    <section className="tab active">Profile Detail</section>
                    <section className="tab">About</section>
                  <section className="tab-data">
                      <br />
                      Birbal Singh Mahala
                      <br />
                      <a className="btn btn-danger" onClick={()=>logout((routelink)=>{history.replace(routelink)})} > Logout </a>
                  </section>
                </section>
                
                
              </nav>
            </header>
            <section className="body">
               <Switch>                  
                  <Route exact path={match.url + '/'} component={bodyComponent}></Route>                
                </Switch>
            </section>
          </div>
         
  );
}

export default connect(null, {logout})(AdminRoute); ;