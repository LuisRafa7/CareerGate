import React, { useState } from "react";

function Person({ setNumber, person, setPerson }) {
  const [name, setName] = useState(person.name ? person.name : "");
  const [adress, setAdress] = useState(person.adress ? person.adress : "");
  const [city, setCity] = useState(person.city ? person.city : "");
  const [postCode, setPostCode] = useState(
    person.postCode ? person.postCode : ""
  );
  const [email, setEmail] = useState(person.email ? person.email : "");
  const [phoneNumber, setPhoneNumber] = useState(
    person.phoneNumber ? person.phoneNumber : ""
  );
  const [informations, setInformations] = useState(
    person.informations ? person.informations : ""
  );
  const [image, setImage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setNumber(1);
    setPerson({
      name: name,
      adress: adress,
      city: city,
      postCode: postCode,
      email: email,
      phoneNumber: phoneNumber,
      informations: informations,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={person.name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="adress">Adress:</label>
        <input
          type="text"
          name="adress"
          value={person.adress}
          onChange={(e) => {
            setAdress(e.target.value);
          }}
        />
        <label htmlFor="city">City:</label>
        <input
          type="text"
          name="city"
          value={person.city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <label htmlFor="postcode">Post Code:</label>
        <input
          type="text"
          name="postcode"
          value={person.postCode}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={person.email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={person.phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <label htmlFor="informations">About me:</label>
        <input
          type="text"
          name="informations"
          value={person.informations}
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
