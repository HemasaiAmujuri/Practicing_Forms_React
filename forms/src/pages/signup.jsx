import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import '../styles/Signupstyle.css'

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

        <div className="gender">

          <legend> Gender </legend>
          <input type="radio" name="gender" value="male"/>
          <label>Male</label>

          
          <input type="radio" name="gender" value="female"/>
          <label>Female</label>

         
          <input type="radio" name="gender" value="other"/>
           <label>Other</label>
           </div>

        <div className="info">
          <label> Address </label>
          <input
            type="textArea"
            Placeholder="Enter your address"
            rows="50"
            cols="30"
            onChange={handleEvent}
          ></input>
        </div>


        <div className="button">
          <input
            type="submit"onClick={storeData}
          ></input>
        </div>

        <h6> Already have an account? <Link to = "/login">LogIn</Link></h6>
      </form>
    </div>
  );
}

export default Signup;
