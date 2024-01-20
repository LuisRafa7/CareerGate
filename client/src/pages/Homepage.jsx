import React from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/person");
      }}
    >
      Do your CV
    </button>
  );
}

export default Homepage;
