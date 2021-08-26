import React from "react";
const User = ({ username, contact, email }) => {
  return (
    <div className="userDetails">
      <p>USERNAME :{username}</p>
      <p>CONTACT :{contact}</p>
      <p>EMAIL :{email}</p>
    </div>
  );
};
export default User;
