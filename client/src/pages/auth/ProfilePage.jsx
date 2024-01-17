import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";

const ProfilePage = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(user ? user.name : '');

  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [editedEmail, setEditedEmail] = useState(user ? user.email : '');

  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [editedPassword, setEditedPassword] = useState('');

  const handleEditNameClick = () => {
    setIsEditing(true);
  };

  const handleSaveNameClick = () => {
    updateUser({ ...user, name: editedName });
    setIsEditing(false);
  };

  const handleEditEmailClick = () => {
    setIsEditingEmail(true);
  };

  const handleSaveEmailClick = () => {
    updateUser({ ...user, email: editedEmail });
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
          <p>Name: {user.name} </p>
          <button onClick={handleEditNameClick}>Edit Name</button>
          <button onClick={handleSaveNameClick}>Save</button>
          <p>Email: {user.email} </p>
          <button onClick={handleEditEmailClick}>Edit Email</button>
          <button onClick={handleSaveEmailClick}>Save</button>
        </div>
      </div>
    );
  }


export default ProfilePage;
