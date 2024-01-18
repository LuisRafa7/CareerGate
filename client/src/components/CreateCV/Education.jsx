import React, { useState } from "react";

function Education() {
    const [educationArray, setEducationArray] = useState([]);
    const [school, setSchool] = useState();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [degree, setDegree] = useState();
    const [city, setCity] = useState();
    const [country, setCountry] = useState();

    const handleSubmit = () => {
        const newEducation = {
          school: school,
          startDate: startDate,
          endDate: endDate,
          degree: degree,
          city: city,
          country: country
        };

        setEducationArray([...educationArray, newEducation]);
  };

  return (
    <>
      <form onSubmit={(e) => {
    e.preventDefault();
    handleSubmit();
   }}>
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
        <button type="submit">Next</button>
      </form>
    </>
  );
}

export default Education;