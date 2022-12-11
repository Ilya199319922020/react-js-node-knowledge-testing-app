import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import userReducer from './reducer/userReducer';

const reducers = combineReducers({
	user: userReducer,
	resultUserTest: userReducer,
	isTable: userReducer,
	resultsAllTest: userReducer,
	isDiagram: userReducer,
	countUser: userReducer,
	diagramData: userReducer,
	isLoading: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));