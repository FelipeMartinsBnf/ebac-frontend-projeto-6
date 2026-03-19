import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart'

export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
