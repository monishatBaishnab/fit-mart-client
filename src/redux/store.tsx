import { configureStore } from "@reduxjs/toolkit";
import { ftApi } from "./api";
import productReducer from './features/Product'

export const store = configureStore({
    reducer: {
        products: productReducer,
        [ftApi.reducerPath]: ftApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ftApi.middleware)
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch