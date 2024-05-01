import { configureStore } from "@reduxjs/toolkit";
import { groupReducer } from "./reducer/groupReducer";


export const store = configureStore({
    reducer: {
        groupReducer
    }
});