import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface userState {
  username: string;
  role: string;
  email?: string;
}

// Define the initial state using that type
const initialState: userState = {
  username: '',
  role: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user ',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // add
    setUser: (
      state,
      action: PayloadAction<{ username: string; role: string; email: string }>,
    ) => {
      state.username = action.payload.username;
      state.role = action.payload.role;
      state.email = action.payload.email;
    },

    // update
    updateUser: (
      state,
      action: PayloadAction<{ username?: string; role?: string }>,
    ) => {
      if (action.payload.username) {
        state.username = action.payload.username;
      }
      if (action.payload.role) {
        state.role = action.payload.role;
      }
    },
    // remove
    removeUser: (state) => {
      state.username = '';
      state.role = '';
    },
  },
});

export const { setUser, updateUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
