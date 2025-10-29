// 🧠 Redux Store Setup
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import searchReducer from '../features/searchSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,     // 🛒 Cart state
    search: searchReducer, // 🔍 Search state
  },
})


