import React, { useState } from "react";
import Person from "../components/CreateCV/Person";
import Experience from "../components/CreateCV/Experience";
import Education from "../components/CreateCV/Education";
import Languages from "../components/CreateCV/Languages";
import Skills from "../components/CreateCV/Skills";
import axios from "axios";
import PropTypes from "prop-types";

CreateCV.propTypes = {
  getPerson: PropTypes.func.isRequired,
};
 
function CreateCV({ getPerson }) {
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
      `http://localhost:5005/api/curriculumVitae`,
      curriculumVitae
    );
    const response1 = await axios.post(`http://localhost:5005/api/person`, {
      curriculumVitae: response.data._id,
    });
    getPerson();
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
          submit={submit}
        />
      )}
    </div>
  );
}

export default CreateCV;
