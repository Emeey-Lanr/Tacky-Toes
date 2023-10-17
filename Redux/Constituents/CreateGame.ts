import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateGame } from "../../appInterface";
// 1 for creating
// 2 is for created
// 3 is for errors

const createGame: CreateGame = {
  loading: 0,
  phase_text: "",
  player_name: "",
  game_name: "",
  game_link: "",
};

export const createGameSlice = createSlice({
  name: "createGameSlice",
  initialState: { value: createGame },
  reducers: {
    phaseCreationChangeR: (state, action:PayloadAction<CreateGame>) => {
      state.value.phase_text = action.payload.phase_text
      state.value.loading = action.payload.loading;
      if (action.payload.loading === 2) {
        state.value.player_name = action.payload.player_name
        state.value.game_name = action.payload.game_name
        state.value.game_link = action.payload.game_link
      }
    },
  },
});

export const { phaseCreationChangeR } = createGameSlice.actions;
export default createGameSlice.reducer;
