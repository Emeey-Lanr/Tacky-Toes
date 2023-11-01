import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface USER {
 id :number;
email:string;
username :string;
phone_number :number;
img_url :string;
is_verified :boolean;
has_paid :boolean;
payment_type:string;
}

const user: USER = {
 id :0,
email:"",
username :"",
phone_number :0,
img_url :"",
is_verified :false,
has_paid :false,
payment_type:"",
} ;
export const userSlice = createSlice({
  name: "userS",
  initialState: { value:user},
    reducers: {
        collectUserDetailsR: (state, action: PayloadAction<USER>) => {
            state.value = action.payload
        }
    }
})

export const { collectUserDetailsR } = userSlice.actions;
export default userSlice.reducer;
