import {createStore, applyMiddleware, compose} from "redux"
import newsReducer from "./reducers"
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(newsReducer,composeEnhancers(/*(*/applyMiddleware(thunk))/*, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())*/)

export default store

