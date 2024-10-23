import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/products/productSlice'
import { productsApi } from '../services/products'
import { setupListeners } from '@reduxjs/toolkit/query'
import { todosApi } from '../services/todos'
export const store = configureStore({
  reducer: {
    productReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [todosApi.reducerPath]:todosApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware,todosApi.middleware),
})
setupListeners(store.dispatch)