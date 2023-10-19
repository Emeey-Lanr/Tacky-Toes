import { configureStore } from "@reduxjs/toolkit"
import CreateGame from "./Constituents/CreateGame"
import Error from "./Constituents/Error"
import DeleteModalS from "./Constituents/DeleteModalS"
import ProfileModal from "./Constituents/ProfileModal"

export const store = configureStore({
    reducer: {
        CreateGame,
        Error,
        DeleteModalS,
        ProfileModal
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch