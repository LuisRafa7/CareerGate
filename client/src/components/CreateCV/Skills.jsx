import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Skills({ setNumber, curriculumVitae, setCurriculumVitae, submit }) {
  const [skillsArray, setSkillsArray] = useState(
    curriculumVitae.skills ? curriculumVitae.skills : []
  );
  const [skill, setSkill] = useState();

  const [addSkill, setAddSkill] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSkill = {
      id: uuidv4(),
      skill: skill,
    };

    setSkillsArray([...skillsArray, newSkill]);
    setAddSkill(false);
  };

  const addNewSkill = () => {
    setAddSkill(true);
  };

  const handleRemove = (id) => {
    const newSk = skillsArray.filter((one) => one.id !== id);

    setSkillsArray(newSk);
  };

  const handleReturn = () => {
    setNumber(3);
    setCurriculumVitae({ ...curriculumVitae, skills: skillsArray });
  };

  const handleConfirm = () => {
    setNumber(5);
    setCurriculumVitae({ ...curriculumVitae, skills: skillsArray });
  };

  return (
    <>
      {skillsArray &&
        skillsArray.map((one) => {
          return (
            <>
              <div key={one.id}>
                <h4>{one.skill}</h4>
                <button
                  onClick={() => {
                    handleRemove(one.id);
                  }}
                >
                  Remove Skill
                </button>
                <hr />
              </div>
            </>
          );
        })}

      {addSkill ? (
        <form onSubmit={handleSubmit}>
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
      ) : (
        <>
          <button onClick={addNewSkill}>Add New Skill</button>
        </>
      )}
      <button onClick={handleReturn}>Return</button>
      <button onClick={handleConfirm}>Next</button>
    </>
  );
}
export default Skills;
