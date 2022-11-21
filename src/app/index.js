import {configureStore} from "@reduxjs/toolkit";
import profilerReducer from '../app/profilerReducer'
import chatReducer from '../app/chatReducer'

export default configureStore({
    reducer: {
        profiler: profilerReducer,
        chatList: chatReducer
    }
})
