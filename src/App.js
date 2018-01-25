import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk';
import RootRoute from './Route_Root';



const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

class ProviderApp extends Component {
    render() {
        return (
          <Provider store={store} >
            <RootRoute />
          </Provider>          
        );
    }
}

export default ProviderApp;