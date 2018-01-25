import { combineReducers } from 'redux';
import { loginData } from './login_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,
    loginData: loginData
  });

export default rootReducer;