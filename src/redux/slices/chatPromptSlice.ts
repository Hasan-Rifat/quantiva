import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface chatPromptState {
  prompt: string;
}

// Define the initial state using that type
const initialState: chatPromptState = {
  prompt: '',
};

export const chatPromptSlice = createSlice({
  name: 'chatPrompt',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // add
    setPrompt: (state, action: PayloadAction<string>) => {
      state.prompt = action.payload;
    },
    // remove
    removePrompt: (state, action: PayloadAction<string>) => {
      state.prompt = '';
    },
    // update
  },
});

export const {
  setPrompt,
  removePrompt,
  // updatePrompt
} = chatPromptSlice.actions;

export default chatPromptSlice.reducer;
