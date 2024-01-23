import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CreateCV from "./CreateCV";

function ShowCV() {
  const [person123, setPerson123] = useState({});
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
      setPerson123(response.data);
      setCurriculum(response.data.curriculumVitae);
    } catch (error) {
      console.error("Error fetching person:", error);
    }
  };

  return (
    <>
      <div>ShowCV</div>
      {curriculum ? (
        <>
          {person123 && (
            <>
              <h1>person inf</h1>
              <p>Name: {person123.name}</p>
            </>
          )}
          <p>Curriculum</p>
          {curriculum.experience && (
            <>
              <h2>Experience</h2>
              {curriculum.experience.map((one) => {
                return <h4>Title: {one.profession}</h4>;
              })}
            </>
          )}
        </>
      ) : (
        <CreateCV getPerson={getPerson} person123={person123} />
      )}
    </>
  );
}

export default ShowCV;
