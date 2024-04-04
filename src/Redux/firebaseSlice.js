import { createSlice } from '@reduxjs/toolkit'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';

const initialState = {
  table:[]
}
  




export const firebaseSlice = createSlice({

    
  name: 'tabledata',
  initialState
  ,
  reducers: {
    internship: async(state, action) => {
        state.table = action.payload
    },
    visitors: (state, action) => {
      state.value -= 1
    },
   enquiry: (state, action) => {
      state.value += action.payload
    },
  },
})


export const { internship, visitors, enquiry } = firebaseSlice.actions

export default firebaseSlice.reducer