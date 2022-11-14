import {configureStore} from "@reduxjs/toolkit";
import profilerReducer from '../app/profilerReducer'

export default configureStore({
    reducer: {
        profiler: profilerReducer,
    }
})
