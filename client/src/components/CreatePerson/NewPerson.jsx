import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewPerson({ addPerson, getPerson }) {
  const [name, setName] = useState();
  const [adress, setAdress] = useState();
  const [city, setCity] = useState();
  const [postCode, setPostCode] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [informations, setInformations] = useState();
  const [image, setImage] = useState();
  const [imageSelected, setImageSelected] = useState();

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPerson = {
      name: name,
      adress: adress,
      city: city,
      postCode: postCode,
      email: email,
      phoneNumber: phoneNumber,
      informations: informations,
      image: image,
      user: user._id,
    };
    console.log(newPerson);
    addPerson(newPerson);
  };

  const uploadImage = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("file", imageSelected);
      formData.append("upload_preset", "iyjtj16g");
      formData.append("cloud_name", "dnr0j82bs");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dnr0j82bs/image/upload",
        {
          method: "post",
          body: formData,
        }
      );
      if (response) {
        const imgData = await response.json();
        setImage(imgData.url.toString());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {image && <img src={image} alt="profile" />}
        <input
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          onChange={(e) => {
            setImageSelected(e.target.files[0]);
          }}
        />
        <button onClick={uploadImage}>Upload Image</button>
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
            setPostCode(e.target.value);
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

export default NewPerson;
