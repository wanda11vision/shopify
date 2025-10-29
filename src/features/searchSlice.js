// 🔍 Search Slice
import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearch: (state, action) => action.payload, // update search text
  },
})

export const { setSearch } = searchSlice.actions
export default searchSlice.reducer
