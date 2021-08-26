import "./styles.css";
import profile from "./profile.png";
import { useState } from "react";
import User from "./User";
import { GoSignOut } from "react-icons/go";

export default function App() {
  const [subm, setSubm] = useState(1);
  const [userDetails, setUserDetails] = useState({
    username: "",
    contact: "",
    email: ""
  });
  const handleFormData = (e) => {
    e.preventDefault();
    // console.log(userDetails);
    setSubm(true);
  };
  const handleUserChange = (e) => {
    if (e.target.type === "text") {
      setUserDetails((userDetails) => ({
        ...userDetails,
        username: e.target.value
      }));
    } else if (e.target.type === "tel") {
      setUserDetails((userDetails) => ({
        ...userDetails,
        contact: e.target.value
      }));
    } else if (e.target.type === "email") {
      setUserDetails((userDetails) => ({
        ...userDetails,
        email: e.target.value
      }));
    }
  };
  return (
    <div className="App">
      {!subm ? (
        <form
          onSubmit={(e) => {
            handleFormData(e);
          }}
        >
          <input
            value={userDetails.username}
            onChange={(e) => {
              handleUserChange(e);
            }}
            required
            name="username"
            placeholder="Username"
            type="text"
          />
          <input
            value={userDetails.contact}
            onChange={(e) => {
              handleUserChange(e);
            }}
            onInvalid={(e) => {
              e.target.setCustomValidity(
                `"012 456 7889" is the model to follow`
              );
            }}
            onInput={(e) => {
              e.target.setCustomValidity("");
            }}
            required
            name="contact"
            placeholder="078 123 4567"
            type="tel"
            pattern="[0-9]{3}\s[0-9]{3}\s[0-9]{4}"
          />
          <input
            value={userDetails.email}
            onChange={(e) => {
              handleUserChange(e);
            }}
            required
            name="contact"
            placeholder="exemple@gmail.com"
            type="email"
          />
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <>
          <div className="top">
            <button id="signOut">
              <span>SIGN OUT</span> <GoSignOut />
            </button>
            <h3>USER PROFILE</h3>
            <div className="profileCard">
              <img src={profile} alt="profile" />
              <div>PROFILE IMAGE</div>
            </div>
          </div>
          <User
            username={userDetails.username}
            contact={userDetails.contact}
            email={userDetails.email}
          />
        </>
      )}
    </div>
  );
}
