import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
              <div key={one.id}>
                <h3>{one.school}</h3>
                <h4>{one.degree}</h4>
                <h5>
                  {one.startDate} - {one.endDate}
                </h5>
                <h6>
                  {one.city} - {one.country}
                </h6>
                <button
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
        <form onSubmit={handleSubmit}>
          <label htmlFor="school">School:</label>
          <input
            type="text"
            name="school"
            onChange={(e) => {
              setSchool(e.target.value);
            }}
          />
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            name="startDate"
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
          />
          <label htmlFor="endDate">End Date:</label>
          <input
            type="text"
            name="endDate"
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
          />
          <label htmlFor="degree">Degree:</label>
          <input
            type="text"
            name="degree"
            onChange={(e) => {
              setDegree(e.target.value);
            }}
          />
          <label htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            name="country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          <button type="submit">Add Education</button>
        </form>
      ) : (
        <>
          <button onClick={addNewEducation}>Add New Education</button>
        </>
      )}
      <button onClick={handleReturn}>Return</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
}

export default Education;
