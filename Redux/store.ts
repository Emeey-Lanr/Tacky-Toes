import { configureStore } from "@reduxjs/toolkit"
import CreateGame from "./Constituents/CreateGame"
import Error from "./Constituents/Error"

export const store = configureStore({
    reducer: {
        CreateGame,
        Error
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch