import { types } from "../types/types";

export const setError = (err) => ({
  type: types.uiSetError,
  payload: err,
});
export const removeError = () => ({
  type: types.uiRemoveError,
});
export const setLoginError = (err) => ({
  type: types.uiSetLoginError,
  payload: err,
});
export const removeLoginError = () => ({
  type: types.uiRemoveLoginError
});
export const startLoading = () => ({
  type: types.uiStartLoading,
});

export const stopLoading = () => ({
  type: types.uiStopLoading,
});
