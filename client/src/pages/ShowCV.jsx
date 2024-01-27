import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CreateCV from "./CreateCV";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Template1 from "./PDF/Template1";

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
      console.log(response.data.curriculumVitae);
    } catch (error) {
      console.error("Error fetching person:", error);
    }
  };

  return (
    <>
      <div>ShowCV</div>
      {curriculum ? (
        <>
          <p>Curriculum</p>
          {person123 && (
            <>
              <h1>Personnal Information</h1>
              <p>Name: {person123.name}</p>
            </>
          )}
          {curriculum.experience && (
            <>
              {curriculum.experience.length !== 0 && <h2>Experience</h2>}
              {curriculum.experience.map((one) => {
                return (
                  <>
                    <div key={one.id}>
                      {one.profession && <h4>{one.profession}</h4>}
                      {one.startDate && (
                        <h5>
                          {one.startDate} - {one.endDate && <>{one.endDate}</>}
                        </h5>
                      )}
                      {one.city && (
                        <h5>
                          {one.city} - {one.country && <>{one.country}</>}
                        </h5>
                      )}
                      {one.tasks && <h5>{one.tasks}</h5>}
                    </div>
                  </>
                );
              })}
            </>
          )}

          {curriculum.education && (
            <>
              {curriculum.education.length !== 0 && <h2>Education</h2>}
              {curriculum.education.map((one) => {
                return (
                  <>
                    <div key={one.id}>
                      {one.school && <h4>{one.school}</h4>}
                      {one.degree && <h5>{one.degree}</h5>}
                      {one.startDate && (
                        <h5>
                          {one.startDate} - {one.endDate && <>{one.endDate}</>}
                        </h5>
                      )}
                      {one.city && (
                        <h5>
                          {one.city} - {one.country && <>{one.country}</>}
                        </h5>
                      )}
                    </div>
                  </>
                );
              })}
            </>
          )}

          {curriculum.languages && (
            <>
              {curriculum.languages.length !== 0 && <h2>Languages</h2>}
              {curriculum.languages.map((one) => {
                return (
                  <>
                    <div key={one.id}>
                      {one.language && (
                        <h5>
                          {one.language} - {one.level && <>{one.level}</>}
                        </h5>
                      )}
                    </div>
                  </>
                );
              })}
            </>
          )}

          {curriculum.skills && (
            <>
              {curriculum.skills.length !== 0 && <h2>Skills</h2>}
              {curriculum.skills.map((one) => {
                return (
                  <>
                    <div key={one.id}>{one.skill && <h5>{one.skill}</h5>}</div>
                  </>
                );
              })}
            </>
          )}
          <h2>Download</h2>
          <PDFDownloadLink
            document={
              <Template1 person123={person123} curriculum={curriculum} />
            }
            fileName="resume"
          >
            {({ loading }) =>
              loading ? (
                <button>Loading Document</button>
              ) : (
                <button>Resume 1</button>
              )
            }
          </PDFDownloadLink>
        </>
      ) : (
        <>
          <CreateCV getPerson={getPerson} person123={person123} />
        </>
      )}
    </>
  );
}

export default ShowCV;
