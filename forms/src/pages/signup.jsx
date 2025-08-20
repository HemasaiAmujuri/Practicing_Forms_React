import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Signupstyle.css";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    DOB: "",
    mobile: "",
    gender: "",
    address: "",
  });

  const handleEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  function storeData() {
    localStorage.setItem("name", form.name);
    localStorage.setItem("email", form.email);
    localStorage.setItem("DOB", form.DOB);
    localStorage.setItem("mobile", form.mobile);
    localStorage.setItem("gender", form.gender);
    localStorage.setItem("address", form.address);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    storeData();
    setForm({
    name: "",
    email: "",
    DOB: "",
    mobile: "",
    gender: "",
    address: "", 
  });
  alert("Data saved successfully")
  };

  return (
    <div className="signUp">
      <form onSubmit={handleSubmit}>
        <div className="info">
          <h1> SIGN UP </h1>
          <label> Name </label>
          <input
            type="text"
            value={form.name}
            name="name"
            placeholder="Enter your name"
            required
            onChange={handleEvent}
          />
        </div>

        <div className="info">
          <label> Email </label>
          <input
            type="email"
            value={form.email}
            name="email"
            placeholder="Enter your email"
            required
            onChange={handleEvent}
          />
        </div>

        <div className="info">
          <label> DOB </label>
          <input
            type="Date"
            value={form.DOB}
            name="DOB"
            placeholder="Enter your name"
            required
            onChange={handleEvent}
          />
        </div>

        <div className="info">
          <label> Mobile </label>
          <input
            type="number"
            value={form.mobile}
            name="mobile"
            placeholder="Enter your name"
            required
            onChange={handleEvent}
          />
        </div>

        <div className="gender">
          <legend> Gender </legend>
          <input type="radio" name="gender" value="male"  checked={form.gender == "male"} onChange={handleEvent}/>
          <label>Male</label>

          <input type="radio" name="gender" value="female" checked={form.gender == "female"} onChange={handleEvent}/>
          <label>Female</label>

          <input type="radio" name="gender" value="other" checked={form.gender == "other"} onChange={handleEvent}/>
          <label>Other</label>
        </div>

        <div className="info">
          <label> Address </label>
          <textarea
            placeholder="Enter your address"
            rows="5"
            cols="25"
            value={form.address}
            name="address"
            onChange={handleEvent}
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
