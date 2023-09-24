import { configureStore} from '@reduxjs/toolkit';
import { LoginSlice } from './login/LoginSlice';
import { BaselineSlice, ThresholdsSlice } from './tables';
import { ResultsQuerySlice } from './tables/ResultsQuerySlice';
import { credentialsSlice } from './login';
import { TreeSlice } from './tree/TreeSlice';


export const store = configureStore({
  reducer: {
    tree: TreeSlice.reducer,
    credentials: credentialsSlice.reducer,
    auth: LoginSlice.reducer,
    query: ResultsQuerySlice.reducer,
    thresholds: ThresholdsSlice.reducer,
    messageBL: BaselineSlice.reducer,
  },
});

