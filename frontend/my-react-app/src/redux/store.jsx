import { legacy_createStore as createStore, applyMiddleware } from 'redux'

import logger from 'redux-logger'

import { thunk } from 'redux-thunk';

import reducer from './rootReducer';

const store = createStore(reducer, applyMiddleware(logger, thunk))

export default store


