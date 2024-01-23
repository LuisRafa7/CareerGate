// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1 className="careergate">CAREERGATE</h1>
      <Link to="/">
        <button className="btn-navbar button">Home</button>
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/profile">
            <button className="btn-navbar button">Profile</button>
          </Link>
          <button onClick={logOutUser} className="nav-button button">Logout</button>
          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {" "}
            <button className="nav-button button">Sign Up</button>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <button className="nav-button button">Login</button>{" "}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
