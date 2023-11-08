import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemSlice";

const myntraStore = configureStore({
  reducer: {
    productItems: itemsSlice.reducer,
  },
});

export default myntraStore;
