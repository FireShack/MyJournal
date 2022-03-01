import { types } from "../types/types";

const loadingState = {
  loading: false,
  msgError: null,
};
export const uiReducer = (state = loadingState, action) => {
  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,
        msgError: action.payload,
      };

    case types.uiRemoveError:
      return {
        ...state,
        msgError: null,
      };
    case types.uiStartLoading:
      return {
        ...state,
        loading: true,
      };
    case types.uiStopLoading:
      return {
        ...state,
        loading: false,
      };
    case types.uiSetLoginError:
      return {
        ...state,
        msgError: action.payload,
      };
    case types.uiRemoveLoginError:
      return {
        ...state,
        msgError: null,
      };

    default:
      return state;
  }
};
