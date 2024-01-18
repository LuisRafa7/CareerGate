import React, { useState } from 'react';

function Skills() {
    const [skillsArray, setSkillsArray] = useState([]);
    const [skill, setSkill] = useState();

    const handleSubmit = () => {
        const newSkill = {
          skill: skill,
        };
    
        setSkillsArray([...skillsArray, newSkill]);
    };

    return (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <label htmlFor="skill">Skill:</label>
        <input
          type="text"
          name="skill"
          onChange={(e) => {
            setSkill(e.target.value);
          }}
        />
        <button type="submit">Add Skill</button>
      </form>
      </>
);
}
export default Skills;