import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface GAME {
     id :number;
      creator_username :string;
      creator_email :string;
      game_name : string;
      player_username :string;
      game_id :string;
      creator_score :number;
      player_score :number;
      played:boolean;
}

const game:GAME[] = []
export const gameSlice = createSlice({
    name: "gameS",
    initialState: { value: game},
    reducers: {
        collectGameDetailsR: (state, action:PayloadAction<GAME[]>) => {
            state.value = action.payload 
        }
    }
})

export const {collectGameDetailsR} = gameSlice.actions 
export default gameSlice.reducer