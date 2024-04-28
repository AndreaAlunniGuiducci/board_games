import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Error {
  errorTitle: string;
  errorMessage: string;
}

interface ErrorPayload {
  error: Error;
}

interface ErrorState {
  errors: Error[];
  showError: boolean;
}

const initialState: ErrorState = {
  errors: [],
  showError: false,
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    addError(state, action: PayloadAction<ErrorPayload>) {
      state.showError = true;
      state.errors.push(action.payload.error);
    },
    delError(state) {
      const errors = state.errors.splice(1);
      state.errors = errors;
      state.showError = state.errors.length > 0;
    },
  },
});

export default errorSlice.reducer;
export const { addError, delError } = errorSlice.actions;
