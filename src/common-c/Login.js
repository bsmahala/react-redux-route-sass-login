import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import '../index.css';
import { Input } from '../common-c/FormCompoent';
import { ValidateErrorSet } from '../common-s/Utility';
import { fetchLogin } from '../actions/loginLogout_action';




const validate = values => {
    const errors = {}
    ValidateErrorSet(!values.username, errors, 'username', 'Username Required');
    ValidateErrorSet(!values.password, errors, 'password', 'Required');
    ValidateErrorSet(values.username && values.username.length > 15, errors, 'username', 'Must be 15 characters or less');
    return errors
  }



class LoginComponet extends Component {
    render() {
      const { fetchLogin, history, handleSubmit } = this.props;
      return  <div style={{paddingTop: '100px'}}>      
                <div className="h-center"><h2> Company </h2></div>
                <div  className="bg window-center window" style={{width: '400px'}}>
                   <div className="panel">
                        <div className="header">Login</div>
                        <div className="body form">
                        <form onSubmit={handleSubmit((va)=>{
                                fetchLogin(va, (routelink)=> history.replace(routelink));  
                            })}>
                            <Field type="text" icon="user" name="username" label="User Name" component={Input}  />                    
                            <Field type="password" icon="lock" name="password" label="Password" component={Input} />
                            <button type="submit" className="offset-3 btn btn-secondary">Login</button>
                        </form>
                        </div>
                    </div>
                    </div>              
                </div>;        
    };
}


const LoginFnComponet  = reduxForm({
    form: 'login_from',
    validate
})(LoginComponet);

export default connect(null, {fetchLogin})(LoginFnComponet);