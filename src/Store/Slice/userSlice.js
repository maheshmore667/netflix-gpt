import {createSlice} from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "user",
    initialState : null,
    reducers : {
        addUser : (state, action) =>{
            return action?.payload;
        },
        removeUser : (state, action) =>{
            return null;
        },
        updateNameOfUser : (state, action) =>{
           return {...state, displayName : action?.payload}
        }
    }
});

export const {addUser, removeUser, updateNameOfUser} = userSlice?.actions;
export default userSlice?.reducer;