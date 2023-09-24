import { createSlice } from '@reduxjs/toolkit';

export const BaselineSlice = createSlice({
    name: 'Baseline',
    initialState: {
        message_GB: null,
        message_CB: null
    },
    reducers: {
        setMessageGB: (state, action  ) => {
            state.message_GB = action.payload.results;
        },
        setMessageCB: (state, action  ) => {
            state.message_CB = action.payload.results;
        },
        setErrorsMessageGB: (state, action) => {
            state.message_GB = action.payload.errorMessage;
        },
        setErrorsMessageCB: (state, action) => {
            state.message_CB = action.payload.errorMessage;
        },
        clearMessages: (state) => {
            state.message_GB = null;
            state.message_CB = null;
        }

    }
});


// Action creators are generated for each case reducer function
export const { setMessageGB, setMessageCB, setErrorsMessageGB, setErrorsMessageCB, clearMessages } = BaselineSlice.actions;