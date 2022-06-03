import { createSlice } from "@reduxjs/toolkit";
import { PersonDetail } from "../../Types/Types";

const initialState = {
  details: <PersonDetail[]>[{id:1, company:"efrf3", name:"wff3ffw", additional:"rff3tf", country:"rfftg"}],
  active: false,
};

const rootslice = createSlice({
  name: "detials",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
        console.log(state.details)
      state.details.push({id:Math.random(), ...action.payload});
    },
    OpenModal: (state) => {
      state.active = true;
    },
    closeModal: (state) => {
      state.active = false;
    },
    deleteItem :(state, action)=>{
        state.details.slice(0, action.payload.id)

    }
  },
});

export const { addToBasket, OpenModal, closeModal,deleteItem } = rootslice.actions;
export default rootslice.reducer;
