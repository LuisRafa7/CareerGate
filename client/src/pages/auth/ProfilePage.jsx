import React, { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  if (user) {
    return (
      <div>
        <h1>Profile Page</h1>
        <div>
          <p>Name: {user.name} </p>
          <p>Email: {user.email} </p>
        </div>
      </div>
    );
  }
};

export default ProfilePage;
