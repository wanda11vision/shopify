// 🛒 Cart Slice using Redux Toolkit with LocalStorage Sync
import { createSlice } from "@reduxjs/toolkit";

// 🔹 LocalStorage se cart load karna
const loadCart = () => {
  try {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (err) {
    console.error("Error loading cart:", err);
    return [];
  }
};

// 🔹 LocalStorage me cart save karna
const saveCart = (cart) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (err) {
    console.error("Error saving cart:", err);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCart(), // localStorage se initial load
  reducers: {
    // ➕ Add to Cart
    addToCart: (state, action) => {
      const item = state.find((i) => i.name === action.payload.name);
      if (item) {
        item.quantity += 1; // agar item already cart me hai
      } else {
        state.push({ ...action.payload, quantity: 1 }); // naya item add karo
      }
      saveCart(state);
    },

    // ➖ Decrement Quantity
    decrement: (state, action) => {
      const item = state.find((i) => i.name === action.payload.name);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // agar quantity 1 thi to remove kar do
          const index = state.findIndex((i) => i.name === action.payload.name);
          if (index !== -1) state.splice(index, 1);
        }
      }
      saveCart(state);
    },

    // ❌ Remove from Cart
    removeFromCart: (state, action) => {
      const newState = state.filter((i) => i.name !== action.payload.name);
      saveCart(newState);
      return newState;
    },

    // 🧹 Clear full cart
    clearCart: () => {
      saveCart([]);
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart, decrement } = cartSlice.actions;
export default cartSlice.reducer;



// // 🛒 Cart Slice using Redux Toolkit
// import { createSlice } from '@reduxjs/toolkit'

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: [], // cart will hold array of products
//   reducers: {
//     addToCart: (state, action) => {
//       const item = state.find(i => i.name === action.payload.name)
//       if (item) {
//         item.quantity += 1 // increase quantity if already in cart
//       } else {
//         state.push({ ...action.payload, quantity: 1 }) // add new item
//       }
//     },

//     removeFromCart: (state, action) => {
//       return state.filter(i => i.name !== action.payload.name)
//     },

//     clearCart: () => [], // empty cart
//   },
//   decrement: (state, action) => {
//   const item = state.find(i => i.name === action.payload.name);
//   if (item && item.quantity > 1) {
//     item.quantity -= 1;
//   }
// },

// })

// export const { addToCart, removeFromCart, clearCart, decrement } = cartSlice.actions
// export default cartSlice.reducer

















// import { createSlice } from "@reduxjs/toolkit";

// const initialState = JSON.parse(localStorage.getItem("cart")) || [];

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const item = action.payload;
//       const existing = state.find((i) => i.name === item.name);
//       if (existing) existing.quantity += 1;
//       else state.push({ ...item, quantity: 1 });
//       localStorage.setItem("cart", JSON.stringify(state));
//     },
//     removeFromCart: (state, action) => {
//       const newState = state.filter((i) => i.name !== action.payload.name);
//       localStorage.setItem("cart", JSON.stringify(newState));
//       return newState;
//     },
//     increaseQuantity: (state, action) => {
//       const item = state.find((i) => i.name === action.payload.name);
//       if (item) item.quantity += 1;
//       localStorage.setItem("cart", JSON.stringify(state));
//     },
//     decreaseQuantity: (state, action) => {
//       const item = state.find((i) => i.name === action.payload.name);
//       if (item) {
//         item.quantity -= 1;
//         if (item.quantity <= 0) return state.filter((i) => i.name !== action.payload.name);
//       }
//       localStorage.setItem("cart", JSON.stringify(state));
//     },
//     clearCart: () => {
//       localStorage.setItem("cart", JSON.stringify([]));
//       return [];
//     },
//   },
// });

// export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;
