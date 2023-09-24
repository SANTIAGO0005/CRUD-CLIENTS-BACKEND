import { createSlice } from '@reduxjs/toolkit';

export const ResultsQuerySlice = createSlice({
    name: 'ResultsQuery',
    initialState: {
        results_disks: null,
        results_cmdshell: null,
        results_builtinadmin: null,
        results_StatusBackups: null,
        results_ListJobs: null,
        errorMessage: null
    },
    reducers: {
        setResultsquery: (state, action ) => {
            state.results_disks = action.payload.results_disks;
            state.results_cmdshell = action.payload.results_cmdshell;
            state.results_builtinadmin = action.payload.results_builtinadmin;
            state.results_StatusBackups = action.payload.results_StatusBackups;
            state.results_ListJobs = action.payload.results_ListJobs;
            state.errorMessage = null
        
        },
        setErrorsmessageQuery: (state, action) => {
            state.results_disks = null;
            state.results_cmdshell = null;
            state.results_builtinadmin = null;
            state.results_StatusBackups = null;
            state.results_ListJobs = null;
            state.errorMessage = action.payload.errorMessage
        },
        clearResultsquery: (state) => {
            state.results_disks = null;
            state.results_cmdshell = null;
            state.results_builtinadmin = null;
            state.results_StatusBackups = null;
            state.results_ListJobs = null;
            state.errorMessage = null
        },
    }
});



export const { setResultsquery, clearResultsquery, setErrorsmessageQuery} = ResultsQuerySlice.actions;