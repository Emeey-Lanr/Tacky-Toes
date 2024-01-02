import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
interface StartedGameDetailsInterface {
  creator: string;
  versus: string;
  gameId: string;
  creatorVersusId: string;
  creatorScore: number;
  versusScore: number;
  game: string[];
  joined: string[];
}
const startedGameDetails: StartedGameDetailsInterface = {
  creator: "",
  versus: "",
  gameId: "",
  creatorVersusId: "",
  creatorScore: 0,
  versusScore: 0,
  game: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
  joined: [],
};
export const gameStartedSlice = createSlice({
    name:"",
    initialState:{value:startedGameDetails},
    reducers: {
        collectDetails: (state, action:PayloadAction<StartedGameDetailsInterface>) => {
            state.value = action.payload
      }   
    }

})

export const { collectDetails } = gameStartedSlice.actions
export default gameStartedSlice.reducer