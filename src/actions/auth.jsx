import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { notesLogoutCleaning } from "./notes";
import {
  removeLoginError,
  setLoginError,
  startLoading,
  stopLoading,
} from "./ui";

export const startRegister = (email, name, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const startLogin = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(stopLoading());
        dispatch(removeLoginError())
      })
      .catch((e) => {
        dispatch(stopLoading());
        if (e.code === "auth/wrong-password") {
          dispatch(setLoginError("Wrong password, please check it"));
          return;
        } else if (e.code === "auth/user-not-found") {
          dispatch(setLoginError("Wrong email or you are not registered"));
          return;
        } else if (e.code === "auth/invalid-email") {
          dispatch(setLoginError("Please, enter a valid email address"));
          return;
        }
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
    dispatch(notesLogoutCleaning())
  };
};

export const logout = () => ({
  type: types.logout,
});

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});
