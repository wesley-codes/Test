import {configureStore,combineReducers} from "@reduxjs/toolkit"
import RootReducer from "./RootReducer"


export const store = configureStore({

reducer:{
    details :RootReducer
}

})



export type RootState =   ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch