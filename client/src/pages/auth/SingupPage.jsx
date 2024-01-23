// src/pages/SignupPage.jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name };
    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="signupPageContainer">
    <div className="signupPage">
      <h1 className="title-signup">Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label className="label-signup">Email<i class="arrow right"></i></label>
        <input className="inputsignup"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label className="label-signup">Password<i class="arrow right"></i></label>
        <input className="inputsignup"
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <label className="label-signup">Name<i class="arrow right"></i></label>
        <input className="inputsignup"
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <button className="button button-signup" type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to="/login" className="nav-link">
            {" "}
            <button className="button button-login">Login</button>{" "}
      </Link>
    </div>
  </div>
  );
}

export default SignupPage;
