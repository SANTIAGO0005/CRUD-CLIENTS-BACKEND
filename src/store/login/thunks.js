import {
  DeleteCredentials,
  NewCredentials,
  UpdateCredentials,
  getCredentials,
  loginDB,
} from "../../api/providers";
import {
  addNewEmptyCredentials,
  deleteCredentialById,
  savingNewCredential,
  setActiveCredential,
  setClearCredentials,
  setCredentials,
  updateCredential,
} from "./CredentialsSlice";
import { checkingCredentials, login, logout } from "./LoginSlice";

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startLogin = (server, database, user, password, port) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginDB(server, database, user, password, port);
    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  };
};

export const startGetCredentials = () => {
  return async (dispatch) => {
    const results = await getCredentials();
    if (!results.ok) return dispatch(setClearCredentials());
    dispatch(setCredentials([ ...results.results]));
  };
};
export const startNewCredentials = () => {
  return async (dispatch) => {
    dispatch(savingNewCredential());

    const NewCredential = {
      nameconection: "",
      server: " ",
      database: " ",
      user: " ",
      port: " ",
    };

    const result = await NewCredentials(NewCredential);

    if (!result.ok) {
      console.log(result.errorMessage);
      return dispatch(setClearCredentials());
    }
    delete result.ok
    dispatch(addNewEmptyCredentials({ ...result}));
    dispatch(setActiveCredential(result));
  };
};
export const startSaveCredentials = () => {
  return async (dispatch, getState) => {
    const { active: credential } = getState().credentials;

    const credentialStore = { ...credential };
    delete credentialStore.id;

    const result = await UpdateCredentials(credentialStore, credential.id);
    if (!result.ok) return dispatch(setClearCredentials());
    dispatch(updateCredential(credential));
  };
};

export const startDelCredentials = () => {
  return async (dispatch, getState) => {
    const { active: credential } = getState().credentials;

    const result = await DeleteCredentials(credential.id);
    if (!result.ok) return dispatch(setClearCredentials());
    dispatch(deleteCredentialById(credential.id));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    dispatch(logout());
  };
};
