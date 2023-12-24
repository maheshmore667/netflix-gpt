import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../Store/Slice/userSlice";

const appStore = configureStore({
    reducer: {
        user : userReducer
    }
})
export default appStore;