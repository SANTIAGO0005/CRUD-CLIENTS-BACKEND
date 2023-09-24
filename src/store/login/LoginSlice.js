import { createSlice } from '@reduxjs/toolkit';

export const LoginSlice = createSlice({
    name: 'Login',
    initialState: {
        status: 'checking',
        server: null,
        database : null,
        user : null,
        password : null,
        port: null,
        errorMessage: null

    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated';//'checking','authenticated
            state.server = payload.server;
            state.database = payload.database;
            state.user = payload.user;
            state.password = payload.password;
            state.port = payload.port;
            state.errorMessage = null;
        },
        logout: (state, action) => {
            state.status = 'not-authenticated';//'checking','authenticated
            state.server = null;
            state.database = null;
            state.user = null;
            state.password = null;
            state.port = null;
            state.errorMessage = action.payload.errorMessage

        },
        checkingCredentials: (state) => {
            state.status = 'checking'
            state.errorMessage = null
        }
    }
});

export const { login, logout, checkingCredentials} = LoginSlice.actions;