import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Languages({ setNumber, curriculumVitae, setCurriculumVitae }) {
  const [languageArray, setLanguageArray] = useState(
    curriculumVitae.languages ? curriculumVitae.languages : []
  );
  const [level, setLevel] = useState();
  const [language, setLanguage] = useState();

  const [addLanguage, setAddLanguage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLanguage = {
      id: uuidv4(),
      level: level,
      language: language,
    };

    setLanguageArray([...languageArray, newLanguage]);
    setAddLanguage(false);
  };

  const addNewLanguage = () => {
    setAddLanguage(true);
  };

  const handleRemove = (id) => {
    const newLan = languageArray.filter((one) => one.id !== id);

    setLanguageArray(newLan);
  };

  const handleReturn = () => {
    setNumber(2);
    setCurriculumVitae({ ...curriculumVitae, languages: languageArray });
  };

  const handleNext = () => {
    setNumber(4);
    setCurriculumVitae({ ...curriculumVitae, languages: languageArray });
  };

  return (
    <>
      {languageArray &&
        languageArray.map((one) => {
          return (
            <>
              <div key={one.id}>
                <h4>
                  {one.language} - {one.level}
                </h4>
                <button
                  onClick={() => {
                    handleRemove(one.id);
                  }}
                >
                  Remove Language
                </button>
                <hr />
              </div>
            </>
          );
        })}

      {addLanguage ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="language">Language:</label>
          <input
            type="text"
            name="language"
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
          />
          <label htmlFor="level">Level:</label>
          <input
            type="text"
            name="level"
            onChange={(e) => {
              setLevel(e.target.value);
            }}
          />
          <button type="submit">Add Language</button>
        </form>
      ) : (
        <>
          <button onClick={addNewLanguage}>Add New Language</button>
        </>
      )}
      <button onClick={handleReturn}>Return</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
}

export default Languages;
