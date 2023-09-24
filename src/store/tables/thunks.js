import {
  database_query,
  Genrate_baseline,
  Compare_baseline,
} from "../../api/providers";
import { setResultsquery, clearResultsquery, setErrorsmessageQuery } from "./ResultsQuerySlice";
import { setThresholds, clearThresholds } from "./ThresholdsSlice";
import {
  setMessageGB,
  setErrorsMessageGB,
  setMessageCB,
  setErrorsMessageCB,
} from "./BaselineSlice";

export const startQuery = () => {
  return async (dispatch, getState) => {
    const { server, database, user, password, port } = getState().auth;
    dispatch(clearResultsquery());
    dispatch(clearThresholds());
    
    const resp = await database_query(server, database, user, password, port);
    if (!resp.ok) return dispatch(setErrorsmessageQuery(resp));

    dispatch(setResultsquery(resp.result1));
    dispatch(setThresholds(resp.result2));
  };
};

export const startQueryGB = () => {
  return async (dispatch, getState) => {
    const { server, database, user, password, port } = getState().auth;

    const resp = await Genrate_baseline(server, database, user, password, port);
    if (!resp.ok) return dispatch(setErrorsMessageGB(resp));
    dispatch(setMessageGB(resp));
  };
};

export const startQueryCB = () => {
  return async (dispatch, getState) => {
    const { server, database, user, password, port } = getState().auth;
    const resp = await Compare_baseline(server, database, user, password, port);
    if (!resp.ok) return dispatch(setErrorsMessageCB(resp));
    dispatch(setMessageCB(resp));
  };
};
