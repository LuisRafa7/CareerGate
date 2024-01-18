import React, { useState } from "react";

function Experience() {
  const [experienceArray, setExperienceArray] = useState([]);
  const [experience, setExperience] = useState([]);
  const [profession, setProfession] = useState();

  const handleSubmit = () => {
    setExperience({ profession: profession });
    setExperienceArray([...experienceArray, experience]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="profession">Profession:</label>
        <input
          type="text"
          name="profession"
          onChange={(e) => {
            setProfession(e.target.value);
          }}
        />
        <button type="submit">Next</button>
      </form>
    </>
  );
}

export default Experience;
