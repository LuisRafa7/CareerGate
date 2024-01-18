import React, { useState } from "react";

function Experience() {
  const [experienceArray, setExperienceArray] = useState([]);
  const [profession, setProfession] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [tasks, setTasks] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();

  const handleSubmit = () => {
    const newExperience = {
      profession: profession,
      startDate: startDate,
      endDate: endDate,
      tasks: tasks,
      city: city,
      country: country,
    };

    setExperienceArray([...experienceArray, newExperience]);
  };

  return (
    <>
      <form onSubmit={(e) => {
    e.preventDefault();
    handleSubmit();
   }}>
        <label htmlFor="profession">Profession:</label>
        <input
          type="text"
          name="text"
          onChange={(e) => {
            setProfession(e.target.value);
          }}
        />
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          name="date"
          onChange={(e) => {
            setStartDate(e.target.value);
          }}
        />
        <label htmlFor="endDate">End Date:</label>
        <input
          type="text"
          name="text"
          onChange={(e) => {
            setEndDate(e.target.value);
          }}
        />
        <label htmlFor="tasks">Tasks:</label>
        <input
          type="text"
          name="text"
          onChange={(e) => {
            setTasks(e.target.value);
          }}
        />
        <label htmlFor="city">City:</label>
        <input
          type="text"
          name="text"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          name="text"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <button type="submit">Next</button>
      </form>
    </>
  );
}

export default Experience;
