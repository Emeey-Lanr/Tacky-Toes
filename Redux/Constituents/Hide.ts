import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const hideUI:{hideSideBar:boolean} = {
    hideSideBar: false,
    
}
export const hideSlice = createSlice({
    name:"hideSlice",
    initialState: { value: hideUI },
    reducers: {
        changeSideBar: (state, action: PayloadAction<boolean>)=>{
            state.value.hideSideBar = action.payload
        }
    }
})

export const { changeSideBar } = hideSlice.actions
export default hideSlice.reducer