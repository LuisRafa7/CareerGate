import React from 'react';

const ProfilePage = ({ user }) => {
  if (!user) {
    return <div>Error</div>;
  }

  const { name, email, password} = user;

  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </div>
    </div>
  );
};

export default ProfilePage;