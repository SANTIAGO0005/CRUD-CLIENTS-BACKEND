import { createSlice } from '@reduxjs/toolkit';

export const ThresholdsSlice = createSlice({
    name: 'Thresholds  ',
    initialState: {
        has_low_free_porc: null,
        has_low_config_value: null,
        has_low_SrvRole: null,
        has_low_Days: null,
        has_low_Results: null
    },
    reducers: {
        setThresholds: (state,action) => {
            state.has_low_free_porc = action.payload.has_low_free_porc;
            state.has_low_config_value = action.payload.has_low_config_value;
            state.has_low_SrvRole = action.payload.has_low_SrvRole;
            state.has_low_Days = action.payload.has_low_Days;
            state.has_low_Results = action.payload.has_low_Results;
        },
        clearThresholds: (state) => {
            state.has_low_free_porc = null;
            state.has_low_config_value = null;
            state.has_low_SrvRole = null;
            state.has_low_Days = null;
            state.has_low_Results = null;
            
        }
    }
});


// Action creators are generated for each case reducer function
export const { setThresholds, clearThresholds } = ThresholdsSlice.actions;