import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import mathReducer from './reducers/mathReducer'
import userReducer from './reducers/userReducer'
import budgetClassReducer from './reducers/budgetClassReducer'

const logger = createLogger()

export default createStore(combineReducers({user: userReducer, math: mathReducer, budget_class: budgetClassReducer}), {}, applyMiddleware(logger));