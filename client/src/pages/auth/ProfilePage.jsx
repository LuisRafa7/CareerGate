import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import axios from "axios";

const ProfilePage = () => {
  const { user, setUser, authenticateUser, removeToken, storeToken } =
    useContext(AuthContext);

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(user ? user.name : "");

  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [editedEmail, setEditedEmail] = useState(user ? user.email : "");

  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [editedPassword, setEditedPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState();

  const handleChangeSubmit = (e) => {
    const requestBody = { editedEmail, password };
    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeUser = async (chan) => {
    console.log(chan);
    const newUser = {
      name: chan.name,
      email: chan.email,
    };
    const response = await axios.put(
      `http://localhost:5005/api/user/${user._id}`,
      newUser
    );
    setUser(response.data);
  };

  const handleEditNameClick = () => {
    setIsEditing(true);
  };

  const handleSaveNameClick = () => {
    setUser({ ...user, name: editedName });
    setIsEditing(false);
    changeUser({ ...user, name: editedName });
    handleChangeSubmit();
  };

  const handleEditEmailClick = () => {
    setIsEditingEmail(true);
  };

  const handleSaveEmailClick = () => {
    setUser({ ...user, email: editedEmail });
    setIsEditingEmail(false);
    changeUser({ ...user, email: editedEmail });
  };

  const handleEditPasswordClick = () => {
    setIsEditingPassword(true);
  };

  const handleSavePasswordClick = () => {
    setIsEditingPassword(false);
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
            <button onClick={handleSaveEmailClick}>Save</button>
          </>
        ) : (
          <>
            <p>Email: {user ? user.email : ""} </p>
            <button onClick={handleEditEmailClick}>Edit Email</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
