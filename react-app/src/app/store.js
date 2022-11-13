import { configureStore } from '@reduxjs/toolkit'
import bookmarkReducer from '../features/bookmark/bookmarkSlice'

export default configureStore({
    reducer: {
        bookmark: bookmarkReducer
    }
})