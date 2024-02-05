import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function Experience({ setNumber, curriculumVitae, setCurriculumVitae }) {
  const [experienceArray, setExperienceArray] = useState(
    curriculumVitae.experience ? curriculumVitae.experience : []
  );
  const [profession, setProfession] = useState();
  const [company, setCompany] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [tasks, setTasks] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();

  const [addExperience, setAddExperience] = useState(false);

  let { personId } = useParams();

  useEffect(() => {
    getExperience();
  }, []);

  const getExperience = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/api/person/${personId}`
      );
      setExperienceArray(response.data.curriculumVitae.experience);
    } catch (error) {
      console.error("Error fetching person:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExperience = {
      id: uuidv4(),
      profession: profession,
      company: company,
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
              <div
                key={one.id}
                style={{
                  fontSize: "25px",
                  fontFamily: '"Gill Sans", sans-serif',
                }}
              >
                <h3>{one.company}</h3>
                <h3>{one.profession}</h3>
                <h4>
                  {one.city} - {one.country}
                </h4>
                <h5>
                  {one.startDate} - {one.endDate}
                </h5>
                <p>{one.tasks}</p>
                <button
                  className="button4 btn-third"
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
        <form
          onSubmit={handleSubmit}
          className="container-exp"
          style={{ gap: "20px" }}
        >
          <label htmlFor="profession" className="exp-p">
            Profession:
          </label>
          <input
            className="inputcv"
            style={{
              fontSize: "25px",
              fontFamily: '"Gill Sans", sans-serif',
              boxSizing: "border-box",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3px)",
              opacity: 1,
            }}
            type="text"
            name="profession"
            onChange={(e) => {
              setProfession(e.target.value);
            }}
          />
          <label htmlFor="company" className="exp-p">
            Company:
          </label>
          <input
            className="inputcv"
            style={{
              fontSize: "25px",
              fontFamily: '"Gill Sans", sans-serif',
              boxSizing: "border-box",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3px)",
              opacity: 1,
            }}
            type="text"
            name="company"
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          />
          <label htmlFor="startDate" className="exp-p">
            Start Date:
          </label>
          <input
            className="inputcv"
            style={{
              fontSize: "25px",
              fontFamily: '"Gill Sans", sans-serif',
              boxSizing: "border-box",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3px)",
              opacity: 1,
            }}
            type="date"
            name="startDate"
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
          />
          <label htmlFor="endDate" className="exp-p">
            End Date:
          </label>
          <input
            className="inputcv"
            style={{
              fontSize: "25px",
              fontFamily: '"Gill Sans", sans-serif',
              boxSizing: "border-box",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3px)",
              opacity: 1,
            }}
            type="text"
            name="endDate"
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
          />
          <label htmlFor="tasks" className="exp-p">
            Tasks:
          </label>
          <input
            className="inputcv"
            style={{
              fontSize: "25px",
              fontFamily: '"Gill Sans", sans-serif',
              boxSizing: "border-box",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3px)",
              opacity: 1,
            }}
            type="text"
            name="tasks"
            onChange={(e) => {
              setTasks(e.target.value);
            }}
          />
          <label htmlFor="city" className="exp-p">
            City:
          </label>
          <input
            className="inputcv"
            style={{
              fontSize: "25px",
              fontFamily: '"Gill Sans", sans-serif',
              boxSizing: "border-box",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3px)",
              opacity: 1,
            }}
            type="text"
            name="city"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <label htmlFor="country" className="exp-p">
            Country:
          </label>
          <input
            className="inputcv"
            style={{
              fontSize: "25px",
              fontFamily: '"Gill Sans", sans-serif',
              boxSizing: "border-box",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3px)",
              opacity: 1,
            }}
            type="text"
            name="country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          <button className="button4 btn-third" type="submit">
            Add Experience
          </button>
        </form>
      ) : (
        <>
          <button onClick={addNewExperience} className="button4 btn-third">
            Add New Experience
          </button>
        </>
      )}
      <div className="col" style={{ gap: "20px", paddingTop: "20px" }}>
        <button onClick={handleReturn} className="button4 btn-exp">
          Return
        </button>
        <button onClick={handleNext} className="button4 btn-exp">
          Next
        </button>
      </div>
    </>
  );
}

export default Experience;
