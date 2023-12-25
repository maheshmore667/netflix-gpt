import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../Store/Slice/userSlice";
import movieReducer from "../Store/Slice/movieSlice";
import gptReducer from "../Store/Slice/gptSlice";
import configReducer from "../Store/Slice/appConfigSlice";

const appStore = configureStore({
    reducer: {
        user : userReducer,
        movies : movieReducer,
        gpt : gptReducer,
        config : configReducer 
    }
})
export default appStore;