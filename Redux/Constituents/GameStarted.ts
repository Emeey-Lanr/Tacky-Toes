import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
interface StartedGameDetailsInterface {
  creator: string;
  versus: string;
  gameId: string;
  creatorVersusId: string;
  creatorScore: number;
  versusScore: number;
  creatorSymbol: string;
        versusSymbol: string;
  game: string[];
  joined: string[];
  round: number;
}
const startedGameDetails: StartedGameDetailsInterface = {
  creator: "",
  versus: "",
  gameId: "",
  creatorVersusId: "",
  creatorScore: 0,
  versusScore: 0,
   creatorSymbol:"X",
  versusSymbol: "O",
  game: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
  joined: [],
  round:1,
};
export const gameStartedSlice = createSlice({
    name:"gameStarted",
    initialState:{value:startedGameDetails},
    reducers: {
        collectDetails: (state, action:PayloadAction<StartedGameDetailsInterface>) => {
            state.value = action.payload
      } , 
      // delete later an experiment
      inputDataR: (state, action:PayloadAction<{id:number, value:string}>) => {
         state.value.game[action.payload.id] = action.payload.value 
        console.log(action.payload.id)
      }
    }

})

export const { collectDetails, inputDataR } = gameStartedSlice.actions
export default gameStartedSlice.reducer