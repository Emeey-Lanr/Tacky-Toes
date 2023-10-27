import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type Inputdata = number | string
const inputData:Inputdata[] = [-1,-1,-1,-1]
export const emailVerificationSlice = createSlice({
    name: "emailSlice",
    initialState: { value: inputData },
    reducers: {
        emailVerificationChangeDataR: (state, action: PayloadAction<{id:number, data:string}>) => {
            console.log(action.payload)
            state.value[action.payload.id] = action.payload.data
            // for (let i = 0; i < state.value.length; i++){
          
            // }
            
        }
    }
})

export const  {emailVerificationChangeDataR} = emailVerificationSlice.actions
export default emailVerificationSlice.reducer
