import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Experience({ setNumber, curriculumVitae, setCurriculumVitae }) {
  const [experienceArray, setExperienceArray] = useState(
    curriculumVitae.experience ? curriculumVitae.experience : []
  );
  const [profession, setProfession] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [tasks, setTasks] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();

  const [addExperience, setAddExperience] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExperience = {
      id: uuidv4(),
      profession: profession,
      startDate: startDate,
      endDate: endDate,
      tasks: tasks,
      city: city,
      country: country,
    };
    setExperienceArray([...experienceArray, newExperience]);
    setAddExperience(false);
  };

  const addNewExperience = () => {
    setAddExperience(true);
  };

  const handleRemove = (id) => {
    const newEx = experienceArray.filter((one) => one.id !== id);

    setExperienceArray(newEx);
  };

  const handleReturn = () => {
    setNumber(0);
    setCurriculumVitae({ ...curriculumVitae, experience: experienceArray });
  };

  const handleNext = () => {
    setNumber(2);
    setCurriculumVitae({ ...curriculumVitae, experience: experienceArray });
  };

  return (
    <>
      {experienceArray &&
        experienceArray.map((one) => {
          return (
            <>
              <div key={one.id}>
                <h3>{one.profession}</h3>
                <h4>
                  {one.city} - {one.country}
                </h4>
                <h5>
                  {one.startDate} - {one.endDate}
                </h5>
                <p>{one.tasks}</p>
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

      {addExperience ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="profession">Profession:</label>
          <input
            type="text"
            name="profession"
            onChange={(e) => {
              setProfession(e.target.value);
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
          <label htmlFor="tasks">Tasks:</label>
          <input
            type="text"
            name="tasks"
            onChange={(e) => {
              setTasks(e.target.value);
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
          <button type="submit">Add Experience</button>
        </form>
      ) : (
        <>
          <button onClick={addNewExperience}>Add New Experience</button>
        </>
      )}
      <button onClick={handleReturn}>Return</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
}

export default Experience;
