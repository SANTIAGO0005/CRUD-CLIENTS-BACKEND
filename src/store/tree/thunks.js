import { getDbsTree, getTbsTree } from "../../api/tree/providers";
import { setError_treeDbs, setError_treeTbs, setResults_treeDbs, setResults_treeTbs} from "./TreeSlice";

export const startGetBds = () => {
    return async (dispatch, getState) => {
      const { server, database, user, password, port } = getState().auth;
      
      const resp = await getDbsTree(server, database, user, password, port);
      if (!resp.ok) return dispatch(setError_treeDbs(resp));
      dispatch(setResults_treeDbs(resp));
    };
  };

  export const startGetTbs = (database) => {
    return async (dispatch, getState) => {
      const { server, user, password, port } = getState().auth;
      
      const resp = await getTbsTree(server, database, user, password, port);
      if (!resp.ok) return dispatch(setError_treeTbs(resp));
      dispatch(setResults_treeTbs(resp));
    };
  };