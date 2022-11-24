import {configureStore} from "@reduxjs/toolkit";
import profilerReducer from '../app/profilerReducer'
import chatReducer from '../app/chatReducer'
import {logger} from "./middleware/middleware";

export default configureStore({
    reducer: {
        profiler: profilerReducer,
        chatList: chatReducer
    },
    middleware: [logger]
})
