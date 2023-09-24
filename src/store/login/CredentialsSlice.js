import { createSlice } from "@reduxjs/toolkit";

export const credentialsSlice = createSlice({
  name: "credentials",
  initialState: {
    isSaving: false,
    messageSaved: "",
    credentials: [],
    active: null,
  },
  reducers: {
    savingNewCredential: (state) => {
      state.isSaving = true;
    },
    addNewEmptyCredentials: (state, action) => {
      state.credentials.push(action.payload);
      state.isSaving = false;
    },
    setActiveCredential: (state, action) => {
      state.active = action.payload;
    },
    setCredentials: (state, action) => {
      state.credentials = action.payload;
    },
    updateCredential: (state, action) => {
      state.isSaving = false;
      state.credentials = state.credentials.map((credential) => {
        if (credential.id === action.payload.id) {
          return action.payload;
        }
        return credential;
      });
    },
    setClearCredentials: (state) => {
      state.credentials = [];
    },
    deleteCredentialById: (state, action) => {
      state.active = null;
      state.credentials = state.credentials.filter(
        (credential) => credential.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setActiveCredential,
  addNewEmptyCredentials,
  savingNewCredential,
  setCredentials,
  updateCredential,
  setClearCredentials,
  deleteCredentialById,
} = credentialsSlice.actions;
