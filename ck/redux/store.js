import { configureStore } from "@reduxjs/toolkit";

import todoSlice from "./slices/todoSlice";

const store = configureStore({
    reducer: {
        bikes: todoSlice,
    },

})

export default store;