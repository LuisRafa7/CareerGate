import React, { useState } from "react";
import Person from "../components/CreateCV/Person";
import Experience from "../components/CreateCV/Experience";

function CreateCV() {
  const [number, setNumber] = useState(0);
  const [person, setPerson] = useState();

  return (
    <div>
      CreateCV
      {number === 0 && <Person setNumber={setNumber} setPerson={setPerson} />}
      {number === 1 && <Experience />}
    </div>
  );
}

export default CreateCV;
