import React from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="center-button">
    <button className="button button-homepage"
      onClick={() => {
        navigate("/person");
      }}
    >
      Create your CV
    </button>
    </div>
  );
}

export default Homepage;
