
import userReducer from '../features/user/UserSlice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSage from './sagas'

const persistConfig = {
    key: 'root',
    storage,
}

const userPersistedReducer = persistReducer(persistConfig, userReducer)

const getmiddleware = getDefaultMiddleware({
    serializableCheck: false,
})

const root = combineReducers({
    user: userPersistedReducer,
})

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: root,
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSage)

export const persistor = persistStore(store)
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch