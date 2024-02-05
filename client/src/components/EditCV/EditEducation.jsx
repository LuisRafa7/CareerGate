import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function Education({ setNumber, curriculumVitae, setCurriculumVitae }) {
  const [educationArray, setEducationArray] = useState(
    curriculumVitae.education ? curriculumVitae.education : []
  );
  const [school, setSchool] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [degree, setDegree] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();

  const [addEducation, setAddEducation] = useState(false);

  let { personId } = useParams();

  useEffect(() => {
    getEducation();
  }, []);

  const getEducation = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/api/person/${personId}`
      );
      setEducationArray(response.data.curriculumVitae.education);
    } catch (error) {
      console.error("Error fetching person:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEducation = {
      id: uuidv4(),
      school: school,
      startDate: startDate,
      endDate: endDate,
      degree: degree,
      city: city,
      country: country,
    };
    setEducationArray([...educationArray, newEducation]);
    setAddEducation(false);
  };

  const addNewEducation = () => {
    setAddEducation(true);
  };

  const handleRemove = (id) => {
    const newEd = educationArray.filter((one) => one.id !== id);

    setEducationArray(newEd);
  };

  const handleReturn = () => {
    setNumber(1);
    setCurriculumVitae({ ...curriculumVitae, education: educationArray });
  };

  const handleNext = () => {
    setNumber(3);
    setCurriculumVitae({ ...curriculumVitae, education: educationArray });
  };

  return (
    <>
      {educationArray &&
        educationArray.map((one) => {
          return (
            <>
              <div
                key={one.id}
                style={{
                  fontSize: "25px",
                  fontFamily: '"Gill Sans", sans-serif',
                }}
              >
                <h3>{one.school}</h3>
                <h4>{one.degree}</h4>
                <h5>
                  {one.startDate} - {one.endDate}
                </h5>
                <h6>
                  {one.city} - {one.country}
                </h6>
                <button
                  className="button4 btn-third"
                  onClick={() => {
                    handleRemove(one.id);
                  }}
                >
                  Remove Experience
                </button>
                <hr />
              </div>
            </>
          );
        })}

      {addEducation ? (
        <form
          onSubmit={handleSubmit}
          className="container-exp"
          style={{ gap: "20px" }}
        >
          <label htmlFor="school" className="exp-p">
            School:
          </label>
          <input
            className="inputcv"
            style={{
              fontSize: "25px",
              fontFamily: '"Gill Sans", sans-serif',
              boxSizing: "border-box",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3px)",
              opacity: 1,
            }}
            type="text"
            name="school"
            onChange={(e) => {
              setSchool(e.target.value);
            }}
          />
          <label htmlFor="startDate" className="exp-p">
            Start Date:
          </label>
          <input
            className="inputcv"
            style={{
              fontSize: "25px",
              fontFamily: '"Gill Sans", sans-serif',
              boxSizing: "border-box",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3px)",
              opacity: 1,
            }}
            type="date"
            name="startDate"
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
          />
          <label htmlFor="endDate" className="exp-p">
            End Date:
          </label>
          <input
            className="inputcv"
            style={{
              fontSize: "25px",
              fontFamily: '"Gill Sans", sans-serif',
              boxSizing: "border-box",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3px)",
              opacity: 1,
            }}
            type="text"
            name="endDate"
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
          />
          <label htmlFor="degree" className="exp-p">
            Degree:
          </label>
          <input
            className="inputcv"
            style={{
              fontSize: "25px",
              fontFamily: '"Gill Sans", sans-serif',
              boxSizing: "border-box",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3px)",
              opacity: 1,
            }}
            type="text"
            name="degree"
            onChange={(e) => {
              setDegree(e.target.value);
            }}
          />
          <label htmlFor="city" className="exp-p">
            City:
          </label>
          <input
            className="inputcv"
            style={{
              fontSize: "25px",
              fontFamily: '"Gill Sans", sans-serif',
              boxSizing: "border-box",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3px)",
              opacity: 1,
            }}
            type="text"
            name="city"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <label htmlFor="country" className="exp-p">
            Country:
          </label>
          <input
            className="inputcv"
            style={{
              fontSize: "25px",
              fontFamily: '"Gill Sans", sans-serif',
              boxSizing: "border-box",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3px)",
              opacity: 1,
            }}
            type="text"
            name="country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          <button className="button4 btn-third" type="submit">
            Add Education
          </button>
        </form>
      ) : (
        <>
          <button onClick={addNewEducation} className="button4 btn-third">
            Add New Education
          </button>
        </>
      )}
      <div className="col" style={{ gap: "30px", paddingTop: "20px" }}>
        <button onClick={handleReturn} className="button4 btn-exp">
          Return
        </button>
        <button onClick={handleNext} className="button4 btn-exp">
          Next
        </button>
      </div>
    </>
  );
}

export default Education;
