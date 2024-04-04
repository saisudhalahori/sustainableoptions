import { configureStore , combineReducers} from '@reduxjs/toolkit'
import authReducer from './Authentication'
import firebaseSlice from './firebaseSlice'

const combinereducer = combineReducers( {auth:authReducer, table:firebaseSlice})
 const store = configureStore({
  reducer: (combinereducer)
})

export default store ;