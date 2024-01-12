import  {PayloadAction, createSlice} from "@reduxjs/toolkit"
type NotificationType = {
    email: string;
    username: string;
    notification: string;
    game_title: string;
    game_id: string;
    viewed: boolean;
}
const notificationValue:NotificationType[] =  []

export const notificationSlice = createSlice({
    name:"notifiactionSlice",
    initialState: { value: notificationValue },
    reducers: {
        notificationOnloadR: (state, action:PayloadAction<NotificationType[]>) => {
            state.value = action.payload
        },
        updateViewedR: (state, action:PayloadAction<true>) => {
            for (let i = 0; i < state.value.length; i++){
                if (!state.value[i].viewed) {
                  state.value[i].viewed = true
              }
          }
        },
        newNotificationR: (state, action:PayloadAction<NotificationType>) => {
            if (!state.value.some((value) => value.game_id === action.payload.game_id)) {
                             state.value.unshift(action.payload);
             }

        }
    }
})


export const {notificationOnloadR,updateViewedR, newNotificationR} = notificationSlice.actions
export default notificationSlice.reducer