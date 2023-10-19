import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const profileModalData:{modalNumber:number} = {
    modalNumber:0,
}
// 1 for change password
// 2 for delete account
export const ProfileModalSlice = createSlice({
    name: "profilemodalslice",
    initialState: { value: profileModalData },
    reducers: {
        changeProfileModalNumberR: (state, action:PayloadAction<number>) => {
            state.value.modalNumber = action.payload
        }
    }
})

export const {changeProfileModalNumberR} = ProfileModalSlice.actions
export default ProfileModalSlice.reducer