import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import books from './reducer'

const rootReducer =combineReducers({ books })
const middleware= [thunk,logger]

export default()=>createStore(rootReducer, applyMiddleware(...middleware)) //exporting function that creates instance of store
