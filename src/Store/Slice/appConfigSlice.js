import { createSlice } from "@reduxjs/toolkit"



const appConfig = createSlice({
    name: "config",
    initialState : {
        lang : "en"
    },
    reducers : {
        updateLangKey : (state, action) =>{
            return {...state, lang:action?.payload}
        }
    }
})

export const {updateLangKey} = appConfig?.actions;
export default appConfig?.reducer;