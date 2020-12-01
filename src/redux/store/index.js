import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

// const configureStore = () => {
// 	const sagaMiddleware = createSagaMiddleware();
// 	return {
// 		...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
// 		runSaga: sagaMiddleware.run(rootSaga)
// 	};
// };

// export default configureStore;

const sagaMiddleware = createSagaMiddleware();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(reducer, applyMiddleware(sagaMiddleware,logger));
const configureStore = createStore(rootReducer, storeEnhancers(applyMiddleware(sagaMiddleware)));
//const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default configureStore