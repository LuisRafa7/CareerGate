import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import axios from 'axios';

const ProfilePage = () => {
  const { user, setUser } = useContext(AuthContext);

  const [user1, setUser1] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(user ? user.name : "");

  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [editedEmail, setEditedEmail] = useState(user ? user.email : "");

  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [editedPassword, setEditedPassword] = useState("");

  const getUser1 = async () => {
    const response = await axios.get(
      `http://localhost:5005/api/user/${user._id}`
    );
    setUser1(response.data);
  };

  const handleEditNameClick = () => {
    setIsEditing(true);
  };

  const handleSaveNameClick = () => {
    setUser({ ...user, name: editedName });
    setIsEditing(false);
  };

  const handleEditEmailClick = () => {
    setIsEditingEmail(true);
  };

  const handleSaveEmailClick = () => {
    setUser({ ...user, email: editedEmail });
    setIsEditingEmail(false);
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
            <button onClick={handleSaveNameClick}>Save</button>
          </>
        ) : (
          <>
            <p>Name: {user ? user.name : ""} </p>
            <button onClick={handleEditNameClick}>Edit Name</button>
          </>
        )}

        <p>Email: {editedEmail} </p>
        {isEditingEmail ? (
          <button onClick={handleEditEmailClick}>Edit Email</button>
        ) : (
          <button onClick={handleSaveEmailClick}>Save</button>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
