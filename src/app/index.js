// import {configureStore} from "@reduxjs/toolkit";
// import profilerReducer from '../app/profilerReducer'
// import chatReducer from '../app/chatReducer'
// import {logger} from "./middleware/middleware";
//
// export default configureStore({
//     reducer: {
//         profiler: profilerReducer,
//         chatList: chatReducer
//     },
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
// })

///////////////////////////////////////////////////

import {combineReducers, configureStore} from "@reduxjs/toolkit";
import profilerReducer from '../app/profilerReducer'
import chatReducer from '../app/chatReducer'
import {logger} from "./middleware/middleware";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    profiler: profilerReducer,
    chatList: chatReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(logger)
})
export let persistor = persistStore(store)
export default store
