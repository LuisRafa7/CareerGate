import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import axios from "axios";
import ModalPassword from "../../components/Modal/ModalPassword";
import ModalName from "../../components/Modal/ModalName";
import ModalEmail from "../../components/Modal/ModalEmail";

const ProfilePage = () => {
  const { user, setUser, authenticateUser, removeToken, storeToken } =
    useContext(AuthContext);

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState();

  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [editedEmail, setEditedEmail] = useState();

  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [editedPassword, setEditedPassword] = useState("");

  const [password, setPassword] = useState();

  const [errorMessage, setErrorMessage] = useState();

  const [modalName, setModalName] = useState(false);
  const [modalEmail, setModalEmail] = useState(false);
  const [modalPassword, setModalPassword] = useState(false);

  useEffect(() => {
    if (user) {
      setEditedName(user.name);
      setEditedEmail(user.email);
    }
  }, [user]);

  const handleChangeSubmit = async (e) => {
    const requestBody = { email: editedEmail, password: password };
    const response = await axios.post(
      `http://localhost:5005/auth/login`,
      requestBody
    );
    storeToken(response.data.authToken);
    authenticateUser();
    setPassword();
  };

  const changeUser = async (chan) => {
    try {
      const newUser = {
        name: chan.name,
        email: chan.email,
      };
      const response1 = await axios.put(
        `http://localhost:5005/api/user/${user._id}`,
        newUser
      );
      setUser(newUser);
      removeToken();
      const change = await handleChangeSubmit();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditNameClick = () => {
    setIsEditing(true);
  };

  const handleReturnNameClick = () => {
    setIsEditing(false);
  };

  const handleSaveNameClick = async () => {
    try {
      const requestBody = { email: user.email, password: password };
      const response = await axios.post(
        `http://localhost:5005/auth/login`,
        requestBody
      );
      if (response.status === 200) {
        setUser({ ...user, name: editedName });
        setIsEditing(false);
        changeUser({ ...user, name: editedName });
        toggleModalName();
      }
    } catch (error) {
      setErrorMessage("Wrong Password!");
    }
  };

  const handleEditEmailClick = () => {
    setIsEditingEmail(true);
  };

  const handleReturnEmailClick = () => {
    setIsEditingEmail(false);
  };

  const handleSaveEmailClick = async () => {
    try {
      const requestBody = { email: user.email, password: password };
      const response = await axios.post(
        `http://localhost:5005/auth/login`,
        requestBody
      );
      if (response.status === 200) {
        setUser({ ...user, email: editedEmail });
        setIsEditingEmail(false);
        changeUser({ ...user, email: editedEmail });
        toggleModalEmail();
      }
    } catch (error) {
      setErrorMessage("Wrong Password!");
    }
  };

  const handleEditPasswordClick = () => {
    setIsEditingPassword(true);
  };

  const handleReturnPasswordClick = () => {
    setIsEditingPassword(false);
  };

  const handleSavePasswordClick = async () => {
    try {
      const requestBody = { email: user.email, password: password };
      const response = await axios.post(
        `http://localhost:5005/auth/login`,
        requestBody
      );
      if (response.status === 200) {
        setIsEditingPassword(false);
        changePassword();
        toggleModalPassword();
      }
    } catch (error) {
      setErrorMessage("Wrong Password!");
    }
  };

  const changePassword = async () => {
    try {
      const requestBody = {
        email: editedEmail,
        password: editedPassword,
      };
      const response1 = await axios.post(
        `http://localhost:5005/auth/changePassword`,
        requestBody
      );
      removeToken();
      const change = await handleChangeSubmitPassword();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeSubmitPassword = async (e) => {
    const requestBody = { email: editedEmail, password: editedPassword };
    const response = await axios.post(
      `http://localhost:5005/auth/login`,
      requestBody
    );
    storeToken(response.data.authToken);
    authenticateUser();
    setPassword();
    setEditedPassword();
  };

  const toggleModalName = () => {
    setModalName(!modalName);
  };

  const toggleModalEmail = () => {
    setModalEmail(!modalEmail);
  };

  const toggleModalPassword = () => {
    setModalPassword(!modalPassword);
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        {isEditing ? (
          <>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={editedName}
              onChange={(e) => {
                setEditedName(e.target.value);
              }}
            />
            <label htmlFor="password">Write your password:</label>
            <input
              type="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {errorMessage && <p>{errorMessage}</p>}
            <button onClick={handleReturnNameClick}>Return</button>
            <button onClick={handleSaveNameClick}>Save</button>
          </>
        ) : (
          <>
            <p>Name: {user ? user.name : ""} </p>
            <button onClick={handleEditNameClick}>Edit Name</button>
          </>
        )}

        {isEditingEmail ? (
          <>
            <label htmlFor="email">Name:</label>
            <input
              type="email"
              name="email"
              value={editedEmail}
              onChange={(e) => {
                setEditedEmail(e.target.value);
              }}
            />
            <label htmlFor="password">Write your password:</label>
            <input
              type="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {errorMessage && <p>{errorMessage}</p>}
            <button onClick={handleReturnEmailClick}>Return</button>
            <button onClick={handleSaveEmailClick}>Save</button>
          </>
        ) : (
          <>
            <p>Email: {user ? user.email : ""} </p>
            <button onClick={handleEditEmailClick}>Edit Email</button>
          </>
        )}

        {isEditingPassword ? (
          <>
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="password"
              name="newPassword"
              onChange={(e) => {
                setEditedPassword(e.target.value);
              }}
            />
            <label htmlFor="oldPassword">Write your old password:</label>
            <input
              type="password"
              name="oldPassword"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {errorMessage && <p>{errorMessage}</p>}
            <button onClick={handleReturnPasswordClick}>Return</button>
            <button onClick={handleSavePasswordClick}>Save</button>
          </>
        ) : (
          <>
            <button onClick={handleEditPasswordClick}>Change Password</button>
          </>
        )}

        {modalName && <ModalName toggleModal={toggleModalName} />}
        {modalEmail && <ModalEmail toggleModal={toggleModalEmail} />}
        {modalPassword && <ModalPassword toggleModal={toggleModalPassword} />}
      </div>
    </div>
  );
};

export default ProfilePage;
