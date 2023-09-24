import { createSlice } from '@reduxjs/toolkit';

export const TreeSlice = createSlice({
    name: 'Tree',
    initialState: {
        results_sys_dbs : [],
        results_dbs: [],
        results_tbs: [],
        errorMessage : null
    },
    reducers: {
        setResults_treeDbs: (state, action) => {
            state.results_sys_dbs = action.payload.result1;
            state.results_dbs = action.payload.result2;
            state.errorMessage = null
        },
        setError_treeDbs: (state, action) => {
            state.errorMessage = action.payload.errorMessage
        },
        setResults_treeTbs: (state, action) => {
            state.results_tbs = action.payload.result
            state.errorMessage = null
        },
        clearResults_treeTbs: (state) => {
            state.results_tbs = []
        },
        setError_treeTbs: (state, action) => {
            state.errorMessage = action.payload.errorMessage
        },
    }
});


// Action creators are generated for each case reducer function
export const { setResults_treeDbs, setResults_treeTbs, clearResults_treeTbs, setError_treeDbs, setError_treeTbs } = TreeSlice.actions;