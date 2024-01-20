import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

function PersonPage() {
  const [personArray, setPersonArray] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    submit();
  }, []);

  const submit = async () => {
    try {
      const response = await axios.get(`http://localhost:5005/api/person`);
      if (response.data) {
        const filter = response.data.filter((one) => one.user === user._id);
        setPersonArray(filter);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {personArray &&
        personArray.map((one) => {
          return (
            <>
              <button>{one.name}</button>
            </>
          );
        })}
      <button>Create a New Person</button>
    </>
  );
}

export default PersonPage;
