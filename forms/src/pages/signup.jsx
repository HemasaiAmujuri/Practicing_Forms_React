import React from "react";
import { useState } from "react";

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
    e.preventDefault();

    const name = e.target.name;
    const value = e.target.value;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };


  function storeData(){
    localStorage.setItem('name', form.name);
    localStorage.setItem('email', form.email);
    localStorage.setItem('DOB', form.DOB);
    localStorage.setItem('mobile', form.mobile);
    localStorage.setItem('gender', form.gender);
    localStorage.setItem('address', form.address)
  }

  return (
    <div class="signUp">
      <form onSubmit={handleEvent}>
        <div className="info">
            <h1> SIGN UP </h1>
          <label> Name </label>
          <input
            type="text"
            value={form.name}
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
            placeholder="Enter your name"
            required
            onChange={handleEvent}
          />
        </div>

        <div className="info">
          <label> Mobile </label>
          <input
            type="text"
            value={form.mobile}
            placeholder="Enter your name"
            required
            onChange={handleEvent}
          />
        </div>

        <div className="info">
          <label> Gender </label>
          <select required>
            <option value="male"> Male </option>
            <option value="female"> Female </option>
            <option value="other"> Other </option>
          </select>
        </div>

        <div className="info">
          <label> Address </label>
          <input
            type="textArea"
            Placeholder="Enter your address"
            rows="5"
            cols="30"
            onChange={handleEvent}
          ></input>
        </div>


        <div className="button">
          <input
            type="submit"onClick={storeData}
          ></input>
        </div>

        <h6> Already have an account? LogIn</h6>
      </form>
    </div>
  );
}

export default Signup;
