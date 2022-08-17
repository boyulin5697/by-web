import thunk from 'redux-thunk'
import {  legacy_createStore as createStore, compose, applyMiddleware }from 'redux'
import reducer from './reducer'

const composeEnhancers = compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;