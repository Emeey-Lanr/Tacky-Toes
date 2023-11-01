import { configureStore } from "@reduxjs/toolkit"
import CreateGame from "./Constituents/CreateGame"
import Error from "./Constituents/Error"
import DeleteModalS from "./Constituents/DeleteModalS"
import ProfileModal from "./Constituents/ProfileModal"
import EmailVerification from "./Constituents/EmailVerification"
import User from "./Constituents/User"
import Game from "./Constituents/Game"

export const store = configureStore({
    reducer: {
        CreateGame,
        Error,
        DeleteModalS,
        ProfileModal,
        EmailVerification,
        User,
        Game
        
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch