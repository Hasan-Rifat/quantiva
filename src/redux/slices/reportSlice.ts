import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface Report {
  id: string;
  name: string;
  reportType: string;
  date: string;
  url: string;
}
[];

interface userState {
  reportList: Report[];
}

// Define the initial state using that type
const initialState: userState = {
  reportList: [],
};

export const reportSlice = createSlice({
  name: 'report',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // add

    addReport: (state, action: PayloadAction<Report>) => {
      state.reportList.push({
        id: action.payload.id,
        name: action.payload.name,
        reportType: action.payload.reportType,
        date: action.payload.date,
        url: action.payload.url,
      });
    },

    // update
    updateReport: (state, action: PayloadAction<Report>) => {
      const index = state.reportList.findIndex(
        (report) => report.id === action.payload.id,
      );
      if (index !== -1) {
        state.reportList[index] = {
          ...state.reportList[index],
          ...action.payload,
        };
      }
    },
  },
});

export const { addReport, updateReport } = reportSlice.actions;

export default reportSlice.reducer;
