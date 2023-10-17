import { configureStore } from "@reduxjs/toolkit"
import CreateGame from "./Constituents/CreateGame"

export const store = configureStore({
    reducer: {
        CreateGame
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch