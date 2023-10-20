import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// phase usage is to know what part, cause the delete modal  will 
// handle different delete from  different delete
interface DeleteModalValue{
    modal_state: boolean,
    modal_message: string,
    modal_text: string,
    phaseUsage:number,
} 
const deleteModalValue:DeleteModalValue = {
    modal_state: false,
    modal_message: "",
    modal_text: "",
    phaseUsage: 0,
}
export const deleteModalSlice = createSlice({
    name: "deleteModalSlice",
    initialState: { value:deleteModalValue},
    reducers: {
        changeDeleteModalState: (state, action: PayloadAction<DeleteModalValue>) => {
            state.value.modal_state = action.payload.modal_state
            state.value.modal_message = action.payload.modal_message;
            state.value.modal_text = action.payload.modal_text;
            state.value.phaseUsage = action.payload.phaseUsage;
        }
        
    }
})

export const {changeDeleteModalState} = deleteModalSlice.actions
export default deleteModalSlice.reducer