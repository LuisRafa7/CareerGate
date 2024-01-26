import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";

function NewPerson({ addPerson }) {
  const [name, setName] = useState();
  const [adress, setAdress] = useState();
  const [city, setCity] = useState();
  const [postCode, setPostCode] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [informations, setInformations] = useState();
  const [image, setImage] = useState();

  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      name: name,
      adress: adress,
      city: city,
      postCode: postCode,
      email: email,
      phoneNumber: phoneNumber,
      informations: informations,
      user: user._id,
    };
    console.log(newPerson);
    addPerson(newPerson);
  };

  return (
    <>
      <form onSubmit={handleSubmit}style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <label htmlFor="name" className="profile-p">Name:</label>
        <input style={{ fontSize: '30px',fontFamily: '"Gill Sans", sans-serif',boxSizing: 'border-box',color: 'black',backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(3px)',opacity: 1}}
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="adress" className="profile-p">Adress:</label>
        <input style={{ fontSize: '30px',fontFamily: '"Gill Sans", sans-serif',boxSizing: 'border-box',color: 'black',backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(3px)',opacity: 1}}
          type="text"
          name="adress"
          onChange={(e) => {
            setAdress(e.target.value);
          }}
        />
        <label htmlFor="city" className="profile-p">City:</label>
        <input style={{ fontSize: '30px',fontFamily: '"Gill Sans", sans-serif',boxSizing: 'border-box',color: 'black',backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(3px)',opacity: 1}}
          type="text"
          name="city"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <label htmlFor="postcode" className="profile-p">Post Code:</label>
        <input style={{ fontSize: '30px',fontFamily: '"Gill Sans", sans-serif',boxSizing: 'border-box',color: 'black',backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(3px)',opacity: 1}}
          type="text"
          name="postcode"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <label htmlFor="email" className="profile-p">Email:</label>
        <input style={{ fontSize: '30px',fontFamily: '"Gill Sans", sans-serif',boxSizing: 'border-box',color: 'black',backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(3px)',opacity: 1}}
          type="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="phoneNumber" className="profile-p">Phone Number:</label>
        <input style={{ fontSize: '30px',fontFamily: '"Gill Sans", sans-serif',boxSizing: 'border-box',color: 'black',backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(3px)',opacity: 1}}
          type="text"
          name="phoneNumber"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <label htmlFor="informations" className="profile-p">About me:</label>
        <input style={{ fontSize: '30px',fontFamily: '"Gill Sans", sans-serif',boxSizing: 'border-box',color: 'black',backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(3px)',opacity: 1}}
          type="text"
          name="informations"
          onChange={(e) => {
            setInformations(e.target.value);
          }}
        />
        <button className="button3" type="submit">Next</button>
      </form>
    </>
  );
}

export default NewPerson;
