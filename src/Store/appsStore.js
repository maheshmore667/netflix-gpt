import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../Store/Slice/userSlice";
import movieReducer from "../Store/Slice/movieSlice";

const appStore = configureStore({
    reducer: {
        user : userReducer,
        movies : movieReducer
    }
})
export default appStore;