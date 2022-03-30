import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk';

import {StoreState} from './storeState'
import {EpisodesReducer} from './Reducer'

const store = createStore(
    EpisodesReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export const useTypedSelector: TypedUseSelectorHook<StoreState> = useSelector

export { store }

