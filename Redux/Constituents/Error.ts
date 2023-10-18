import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
const errorMessage:{errorMessage:string} = {
    errorMessage:""
} 
export const ErrorSlice = createSlice({
    name: "accountSlice",
    initialState: { value: errorMessage },
    reducers: {
        changeErrorMessage: (state, action:PayloadAction<string>) => {
            state.value.errorMessage = action.payload
        }
    }
})

export const { changeErrorMessage } = ErrorSlice.actions
export default ErrorSlice.reducer