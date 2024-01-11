import  {PayloadAction, createSlice} from "@reduxjs/toolkit"
type NotificationType = {
    email: string;
    username: string;
    notification: string;
    viewed: boolean;
}
const notificationValue:NotificationType[] =  []

export const notificationSlice = createSlice({
    name:"",
    initialState: { value: notificationValue },
    reducers: {
        notificationOnloadR: (state, action:PayloadAction<NotificationType[]>) => {
            state.value = action.payload
        },
        newNotificationR: (state, action:PayloadAction<NotificationType>) => {
            state.value.unshift(action.payload)
        }
    }
})


export const {notificationOnloadR,newNotificationR} = notificationSlice.actions
export default notificationSlice.reducer