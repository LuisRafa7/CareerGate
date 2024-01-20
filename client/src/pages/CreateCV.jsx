import React, { useState } from "react";
import Person from "../components/CreateCV/Person";
import Experience from "../components/CreateCV/Experience";
import Education from "../components/CreateCV/Education";
import Languages from "../components/CreateCV/Languages";
import Skills from "../components/CreateCV/Skills";

function CreateCV() {
  const [number, setNumber] = useState(0);
  const [person, setPerson] = useState({
    name: "",
    adress: "",
    city: "",
    postCode: "",
    email: "",
    phoneNumber: "",
    informations: "",
  });
  const [curriculumVitae, setCurriculumVitae] = useState({});

  const submit = async () => {
    const response = await axios.post(
      `http://localhost:5005/api/person`,
      person
    );
    const response1 = await axios.post(`http://localhost:5005/api/person`);
  };

  return (
    <div>
      <h1>Create your CV</h1>
      {number === 0 && (
        <Person setNumber={setNumber} person={person} setPerson={setPerson} />
      )}
      {number === 1 && (
        <Experience
          setNumber={setNumber}
          curriculumVitae={curriculumVitae}
          setCurriculumVitae={setCurriculumVitae}
        />
      )}
      {number === 2 && (
        <Education
          setNumber={setNumber}
          curriculumVitae={curriculumVitae}
          setCurriculumVitae={setCurriculumVitae}
        />
      )}
      {number === 3 && (
        <Languages
          setNumber={setNumber}
          curriculumVitae={curriculumVitae}
          setCurriculumVitae={setCurriculumVitae}
        />
      )}
      {number === 4 && (
        <Skills
          setNumber={setNumber}
          curriculumVitae={curriculumVitae}
          setCurriculumVitae={setCurriculumVitae}
        />
      )}
    </div>
  );
}

export default CreateCV;
