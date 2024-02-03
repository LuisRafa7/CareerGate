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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
        borderRadius: "10px",
        padding: "120px 80px",
        width: "fit-content",
        margin: "auto",
        marginTop: "200px",
        marginBottom: "200px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <>
        {curriculum ? (
          <>
            <p
              className="yellow-underline"
              style={{ fontFamily: "fantasy", fontSize: "50px" }}
            >
              Curriculum
            </p>
            {person123 && (
              <>
                <h1 style={{ fontFamily: "fantasy", fontSize: "30px" }}>
                  Personal Informations
                </h1>
                <p
                  style={{
                    fontFamily: "fantasy",
                    fontSize: "20px",
                    fontWeight: "lighter",
                  }}
                >
                  Name: {person123.name}
                </p>
              </>
            )}
            {curriculum.experience && (
              <>
                {curriculum.experience.length !== 0 && (
                  <h2 style={{ fontFamily: "fantasy", fontSize: "25px" }}>
                    Experience
                  </h2>
                )}
                {curriculum.experience.map((one) => {
                  console.log(one.tasks);
                  return (
                    <>
                      <div key={one.id}>
                        {one.profession && (
                          <h4
                            style={{
                              fontFamily: "fantasy",
                              fontSize: "20px",
                              fontWeight: "lighter",
                            }}
                          >
                            {one.profession}
                          </h4>
                        )}
                        {one.startDate && (
                          <h5
                            style={{
                              fontFamily: "fantasy",
                              fontSize: "20px",
                              fontWeight: "lighter",
                            }}
                          >
                            {one.startDate} -{" "}
                            {one.endDate && <>{one.endDate}</>}
                          </h5>
                        )}
                        {one.city && (
                          <h5
                            style={{
                              fontFamily: "fantasy",
                              fontSize: "20px",
                              fontWeight: "lighter",
                            }}
                          >
                            {one.city} - {one.country && <>{one.country}</>}
                          </h5>
                        )}
                        {one.tasks &&
                          one.tasks.map((task, i) => {
                            return (
                              <div key={i}>
                                <h5
                                  style={{
                                    fontFamily: "fantasy",
                                    fontSize: "20px",
                                    fontWeight: "lighter",
                                  }}
                                >
                                  {task}
                                </h5>
                                ;
                              </div>
                            );
                          })}
                      </div>
                    </>
                  );
                })}
              </>
            )}

            {curriculum.education && (
              <>
                {curriculum.education.length !== 0 && (
                  <h2 style={{ fontFamily: "fantasy", fontSize: "25px" }}>
                    Education
                  </h2>
                )}
                {curriculum.education.map((one) => {
                  return (
                    <>
                      <div key={one.id}>
                        {one.school && (
                          <h4
                            style={{
                              fontFamily: "fantasy",
                              fontSize: "20px",
                              fontWeight: "lighter",
                            }}
                          >
                            {one.school}
                          </h4>
                        )}
                        {one.degree && (
                          <h5
                            style={{
                              fontFamily: "fantasy",
                              fontSize: "20px",
                              fontWeight: "lighter",
                            }}
                          >
                            {one.degree}
                          </h5>
                        )}
                        {one.startDate && (
                          <h5
                            style={{
                              fontFamily: "fantasy",
                              fontSize: "20px",
                              fontWeight: "lighter",
                            }}
                          >
                            {one.startDate} -{" "}
                            {one.endDate && <>{one.endDate}</>}
                          </h5>
                        )}
                        {one.city && (
                          <h5
                            style={{
                              fontFamily: "fantasy",
                              fontSize: "20px",
                              fontWeight: "lighter",
                            }}
                          >
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
                {curriculum.languages.length !== 0 && (
                  <h2 style={{ fontFamily: "fantasy", fontSize: "25px" }}>
                    Languages
                  </h2>
                )}
                {curriculum.languages.map((one) => {
                  return (
                    <>
                      <div key={one.id}>
                        {one.language && (
                          <h5
                            style={{
                              fontFamily: "fantasy",
                              fontSize: "20px",
                              fontWeight: "lighter",
                            }}
                          >
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
                {curriculum.skills.length !== 0 && (
                  <h2 style={{ fontFamily: "fantasy", fontSize: "25px" }}>
                    Skills
                  </h2>
                )}
                {curriculum.skills.map((one) => {
                  return (
                    <>
                      <div key={one.id}>
                        {one.skill && (
                          <h5
                            style={{
                              fontFamily: "fantasy",
                              fontSize: "20px",
                              fontWeight: "lighter",
                            }}
                          >
                            {one.skill}
                          </h5>
                        )}
                      </div>
                    </>
                  );
                })}
              </>
            )}
            <h2
              className="yellow-underline"
              style={{ fontFamily: "fantasy", fontSize: "40px" }}
            >
              Download
            </h2>
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
                  <button className="button-cv">Template 1</button>
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
      <div className="gradient-border"></div>
    </div>
  );
}

export default ShowCV;
