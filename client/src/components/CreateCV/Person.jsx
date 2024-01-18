import React, { useState } from "react";

function Person({ setNumber, setPerson }) {
  const [name, setName] = useState();
  const [adress, setAdress] = useState();
  const [city, setCity] = useState();
  const [postCode, setPostCode] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [informations, setInformations] = useState();
  const [image, setImage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setNumber(1);
    setPerson({ name: name, adress: adress, city: city });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="adress">Adress:</label>
        <input
          type="text"
          name="adress"
          onChange={(e) => {
            setAdress(e.target.value);
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
        <label htmlFor="postcode">Post Code:</label>
        <input
          type="text"
          name="postcode"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <label htmlFor="informations">About me:</label>
        <input
          type="text"
          name="informations"
          onChange={(e) => {
            setInformations(e.target.value);
          }}
        />
        <button type="submit">Next</button>
      </form>
    </>
  );
}

export default Person;
