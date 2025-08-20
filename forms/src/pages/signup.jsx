import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Signupstyle.css";

function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const dobRef = useRef();
  const mobileRef = useRef();
  const genderRef = useRef();
  const addressRef = useRef();


  const handleEvent = (e) => {
    e.preventDefault()
    nameRef.current.value = "";
    emailRef.current.value = "";
    dobRef.current.value = "";
    mobileRef.current.value="";
    genderRef.current.value = "";
    addressRef.current.value = "";

  };

  function storeData() {
    localStorage.setItem("name", nameRef.current.value);
    localStorage.setItem("email", emailRef.current.value);
    localStorage.setItem("DOB", dobRef.current.value);
    localStorage.setItem("mobile", mobileRef.current.value);
    localStorage.setItem("gender", genderRef.current.value);
    localStorage.setItem("address", addressRef.current.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    storeData();
  };

  return (
    <div className="signUp">
      <form onSubmit={handleSubmit}>
        <div className="info">
          <h1> SIGN UP </h1>
          <label> Name </label>
          <input
            type="text"
            ref={nameRef}
            name="name"
            placeholder="Enter your name"
            required

          />
        </div>

        <div className="info">
          <label> Email </label>
          <input
            type="email"
            ref={emailRef}
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="info">
          <label> DOB </label>
          <input
            type="Date"
            ref={dobRef}
            name="DOB"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="info">
          <label> Mobile </label>
          <input
            type="number"
            ref={mobileRef}
            name="mobile"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="gender">
          <legend> Gender </legend>
          <input type="radio" name="gender" value="male"  checked={genderRef.current.value == "male"} />
          <label>Male</label>

          <input type="radio" name="gender" value="female" checked={genderRef.current.value == "female"} />
          <label>Female</label>

          <input type="radio" name="gender" value="other" checked={genderRef.current.value == "other"} />
          <label>Other</label>
        </div>

        <div className="info">
          <label> Address </label>
          <textarea
            placeholder="Enter your address"
            rows="5"
            cols="25"
            ref={addressRef}
            name="address"
          ></textarea>
        </div>

        <div className="button">
          <input type="submit"></input>
        </div>

        <h6>
          Already have an account? <Link to="/login">LogIn</Link>
        </h6>
      </form>
    </div>
  );
}

export default Signup;
