import { createSlice, current } from "@reduxjs/toolkit";
import { PersonDetail } from "../../Types/Types";

const initialState = {
  details: <PersonDetail[]>[
    {
      id: 1,
      company: "efrf3",
      name: "wff3ffw",
      additional: "rff3tf",
      country: "rfftg",
    },
  ],
  active: false,
};

const rootslice = createSlice({
  name: "detials",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      console.log(state.details);
      state.details.push({
        id: Math.floor(Math.random() * 10 + 1),
        ...action.payload,
      });
    },
    OpenModal: (state) => {
      state.active = true;
    },
    closeModal: (state) => {
      state.active = false;
    },
    deleteItem: (state, action) => {
      const currentState = current(state.details);

      state.details.filter((item) => console.log("item", item.id));
      state.details = currentState.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToBasket, OpenModal, closeModal, deleteItem } =
  rootslice.actions;
export default rootslice.reducer;
