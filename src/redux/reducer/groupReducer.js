import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    groupInfo : [{ min: 1, max: 10}],
}

const groupSlice = createSlice({
    name : "group",
    initialState : initialState,
    reducers : {
        addGroup : (state, action)=>{
            state.groupInfo.push({ min: 0 , max: 0});
        },
        updateGroup: (state, action)=>{
            state.groupInfo = action.payload
        },
        changeGroupInput: (state, action)=> {
            let temp = Number(action.payload.value)
            if( isNaN(temp)   ) return;
            state.groupInfo[action.payload.no ][action.payload.type] = Number(action.payload.value);
        },
        deleteGroup: (state, action) => {

            state.groupInfo.splice(action.payload, 1);
        }
        
    }
})

export const groupReducer =  groupSlice.reducer;
export const action =  groupSlice.actions;
export const groupSelector =  (state)=> state.groupReducer.groupInfo ;
