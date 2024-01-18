import React, { useState } from "react";

function Language() {
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
          name="text"
          onChange={(e) => {
            setLevel(e.target.value);
          }}
        />
        <label htmlFor="language">Language:</label>
        <input
          type="text"
          name="text"
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
        />
        <button type="submit">Next</button>
      </form>
    </>
  );
}

export default Language;
