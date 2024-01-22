import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CreateCV from "./CreateCV";

function ShowCV() {
  const [person, setPerson] = useState();
  const [curriculum, setCurriculum] = useState();
  let { personId } = useParams();

  useEffect(() => {
    getPerson();
  }, []);

  const getPerson = async () => {
    const response = await axios.get(
      `http://localhost:5005/api/person/${personId}`
    );
    setPerson(response.data);
    setCurriculum(response.data.curriculumVitae);
    console.log(response.data);
    console.log(response.data.curriculumVitae);
  };

  return (
    <>
      <div>ShowCV</div>
      {person && (
        <>
          <h1>person inf</h1>
          <p>Name: {person.name}</p>
        </>
      )}
      {curriculum && curriculum.data ? (
        <p>Curriculum</p>
      ) : (
        <CreateCV getPerson={getPerson} />
      )}
    </>
  );
}

export default ShowCV;
