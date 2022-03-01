import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleLogin, startLogin } from "../../actions/auth";
import { setLoginError } from "../../actions/ui";
export const LoginComp = () => {
  const dispatch = useDispatch();

  const { loading, msgError } = useSelector((state) => state.ui);
  const [valueEmail, setvalueEmail] = useState("");
  const [valuePassword, setvaluePassword] = useState("");

  const handleValueEmail = (e) => {
    const inputValue = e.target.value;
    inputValue.trim();
    setvalueEmail(inputValue);
  };
  const handleValuePassword = (e) => {
    const inputValue = e.target.value;
    setvaluePassword(inputValue);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (valueEmail === "" || valuePassword === "") {
      return;
    }
    dispatch(startLogin(valueEmail, valuePassword));
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    dispatch(startGoogleLogin());
  };

  return (
    <div className="container">
      <form
        onSubmit={handleLogin}
        className=" auth__input auth__box bg-primary shadow-lg rounded-lg"
      >
        <div className="col">
          <h1 className="h1 text-white text-center display-1">Login</h1>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-11 col-md-8">
            <div className="form-floating">
              <input
                type="mail"
                className="form-control auth__input "
                name="email"
                placeholder="Email"
                autoComplete="off"
                onChange={handleValueEmail}
                value={valueEmail}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-11 col-md-8">
            <div className="form-floating">
              <input
                type="password"
                className="form-control auth__input "
                name="password"
                placeholder="password"
                autoComplete="off"
                onChange={handleValuePassword}
                value={valuePassword}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <Link to="/auth/register">
            <h5 className="text-center text-white">
              <u> Not registered yet? </u>
            </h5>
          </Link>
        </div>

        <div className="row mt-3 d-flex justify-content-center flex-row">
          <div className="col-8">
            <input
              type="submit"
              className="btn btn-outline-light rounded w-100 p-3"
              name="submit"
              value="Login"
              autoComplete="off"
              disabled={loading}
            />
          </div>
          <div className="col-8 mt-3">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline-light d-flex align-items-center justify-content-center p-3 w-100 "
            >
              Login with Google
              <div className="mx-2">
                <img
                  className=""
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="google div"
                />
              </div>
            </button>
          </div>
        </div>
      </form>
      {msgError && (
        <div className="alert alert-danger p-3  text-center mt-2">
          {msgError}
        </div>
      )}
    </div>
  );
};
