import { configureStore } from '@reduxjs/toolkit'
import cocktailSlice from './features/index'
export const store = configureStore({
    reducer: {
        app: cocktailSlice
    }
})