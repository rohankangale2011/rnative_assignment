import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

/**
 * Function configuring store for the redux. Configured with "Reducer" and middlewares(Saga)
 */
export function configStore() {
	const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
	)

  sagaMiddleware.run(rootSaga);

	return store
}