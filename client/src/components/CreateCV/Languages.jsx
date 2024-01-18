import React, { useState } from "react";

function Languages() {
    const [languageArray, setLanguageArray] = useState([]);
    const [level, setLevel] = useState();
    const [language, setLanguage] = useState();

    const handleSubmit = () => {
        const newLanguage = {
          level: level,
          language: language,
        };

        setLanguageArray([...languageArray, newLanguage]);
  };
  return (
    <>
      <form onSubmit={(e) => {
    e.preventDefault();
    handleSubmit();
   }}>
        <label htmlFor="level">Level:</label>
        <input
          type="text"
          name="level"
          onChange={(e) => {
            setLevel(e.target.value);
          }}
        />
        <label htmlFor="language">Language:</label>
        <input
          type="text"
          name="language"
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
        />
        <button type="submit">Next</button>
      </form>
    </>
  );
}

export default Languages;
