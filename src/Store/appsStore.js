import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../Store/Slice/userSlice";
import movieReducer from "../Store/Slice/movieSlice";
import gptReducer from "../Store/Slice/gptSlice";

const appStore = configureStore({
    reducer: {
        user : userReducer,
        movies : movieReducer,
        gpt : gptReducer 
    }
})
export default appStore;