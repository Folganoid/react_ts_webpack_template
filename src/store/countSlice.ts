import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICountState {
  count: number;
}

const initialState: ICountState = {
  count: 0,
};

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    setCountUp(state, action: PayloadAction<number>) {
      state.count = state.count + action.payload;
    },
    setCountDown(state, action: PayloadAction<number>) {
      state.count = state.count - action.payload;
    },
  },
});

export const { setCountUp, setCountDown } = countSlice.actions;
export default countSlice.reducer;
