import { createSlice } from '@reduxjs/toolkit'

const  initialState = {
    currentuser : sessionStorage.getItem("currentuser") || null 
  }

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    authorized: (state, action) => {
      
      state.currentuser = action.payload 
      sessionStorage.setItem("currentuser", action.payload)

    },
    authDeclined: (state, action) => {
      state.currentuser = action.payload || null
    }
    
  },
})


export const { authorized, authDeclined } = authenticationSlice.actions

export default authenticationSlice.reducer