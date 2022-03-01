import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { removeError, setError } from "../../actions/ui";
import { startRegister } from "../../actions/auth";
export const RegisterComp = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);
  const [valueName, setvalueName] = useState("");
  const [valuePassword, setvaluePassword] = useState("");
  const [valueMail, setvalueMail] = useState("");

  const handleValueName = (e) => {
    const inputValue = e.target.value;
    setvalueName(inputValue);
  };
  const handleValuePassword = (e) => {
    const inputValue = e.target.value;
    setvaluePassword(inputValue);
  };
  const handleValueMail = (e) => {
    const inputValue = e.target.value;
    setvalueMail(inputValue);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      return;
    }
    dispatch(startRegister(valueMail, valueName ,valuePassword))
  };
  const isFormValid = () => {
    valueMail.toLowerCase();
    if (valueName === "" || valueMail === "" || valuePassword === "") {
      dispatch(setError("You must complete all field"));
      return false;
    } else if (!validator.isEmail(valueMail)) {
      dispatch(setError("Your email is not correct, please check it"));
      return false;
    } else if (valuePassword.length < 7) {
      dispatch(setError("Your password is too short, please check it"));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <div className="container">
      <form
        className=" auth__input auth__box__register bg-primary shadow-lg rounded-lg"
        onSubmit={handleLogin}
      >
        <div className="col">
          <h1 className="h1 text-white text-center display-1">Register</h1>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-10 col-md-8">
            <div className="form-floating">
              <input
                type="mail"
                className="form-control auth__input "
                name="mail"
                placeholder="mail"
                autoComplete="off"
                onChange={handleValueMail}
                value={valueMail}
              />
              <label htmlFor="mail">Mail</label>
            </div>
          </div>
        </div>

        <div className="row d-flex flex-row justify-content-center mt-3">
          <div className="col-5 col-md-4">
            <div className="form-floating">
              <input
                type="text"
                className="form-control auth__input "
                name="username"
                placeholder="username"
                autoComplete="off"
                onChange={handleValueName}
                value={valueName}
              />
              <label htmlFor="username">Username</label>
            </div>
          </div>
          <div className="col-5 col-md-4">
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
          <Link to="/auth/login">
            <h5 className="text-center text-white">
              <u> Have an account? Login now!</u>
            </h5>
          </Link>
        </div>
        <div className="row mt-3 d-flex justify-content-center">
          <div className="col-8">
            <input
              type="submit"
              className="btn btn-outline-light rounded w-100 p-3"
              name="submit"
              value="Register"
              autoComplete="off"
            />
          </div>
          <div className="col-8 mt-3">
            <button className="btn btn-outline-light d-flex align-items-center justify-content-center p-3 w-100 ">
              Register with Google
              <div className="mx-2">
                <img
                  className=""
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="google button"
                />
              </div>
            </button>
          </div>
        </div>
      </form>
      {msgError && (
        <div className="alert alert-danger p-3 text-center mt-2">
          {msgError}
        </div>
      )}
    </div>
  );
};
