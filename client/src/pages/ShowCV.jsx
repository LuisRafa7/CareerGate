import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CreateCV from "./CreateCV";

function ShowCV() {
  const [person, setPerson] = useState({});
  const [curriculum, setCurriculum] = useState({});
  let { personId } = useParams();

  useEffect(() => {
    getPerson();
  }, []);

  const getPerson = async () => {
    try {
    const response = await axios.get(
      `http://localhost:5005/api/person/${personId}`
    );
    setPerson(response.data);
    setCurriculum(response.data.curriculumVitae);
    console.log(response.data);
    console.log(response.data.curriculumVitae);
  } catch (error) {
    console.error("Error fetching person:", error);
  }
};
  return (
    <>
      <div>ShowCV</div>
      <p>Name: {person.name}</p>
      {curriculum && curriculum.data ? <p>Curriculum</p> : <CreateCV />}
    </>
  );
}

export default ShowCV;
