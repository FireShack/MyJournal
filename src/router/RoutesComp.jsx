import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthRouterComp } from "../components/auth/AuthRouterComp";
import { DashboradComp } from "./DashboradComp";
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { useState } from "react";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { loadNotes } from "../helpers/loadNotes";
import { notesLoad, startLoadingNotes } from "../actions/notes";

export const RoutesComp = () => {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(true);
  const [IsLogin, setIsLogin] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        setIsLogin(true);
        dispatch(login(user.uid, user.displayName));
        dispatch(startLoadingNotes(user.uid))
      } else {
        setIsLogin(false);
      }
      setCheck(false);
    });
  }, [dispatch, setCheck, setIsLogin]);

  if (check) {
    return <h1>Please wait</h1>;
  }

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route
              path="/auth/*"
              element={
                <PublicRoutes IsLogin={IsLogin}>
                  <AuthRouterComp />
                </PublicRoutes>
              }
            />
            <Route exact path="/*" element={<DashboradComp />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};
