import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom"
import "../styles/Signupstyle.css"


function signUp(){
    const { register, handleSubmit, formState : { errors , issubmitting }, reset }  = useForm();

     const onSubmit = (data) => {
    Object.entries(data).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });

    alert("Data saved successfully");
    reset(); 
  };

  return(
    <div className="signUp">
    <form onSubmit = {handleSubmit(onSubmit)}> 
         <h1>SIGN UP</h1>

          <div className="info">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div className="info">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="info">
          <label>Date of Birth</label>
          <input
            type="date"
            {...register("DOB", { required: "Date of birth is required" })}
          />
          {errors.DOB && <p className="error">{errors.DOB.message}</p>}
        </div>


        <div className="info">
          <label>Mobile</label>
          <input
            type="tel"
            placeholder="Enter your mobile number"
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit mobile number",
              },
            })}
          />
          {errors.mobile && <p className="error">{errors.mobile.message}</p>}
        </div>

        <div className="gender">
          <legend>Gender</legend>
          <label>
            <input
              type="radio"
              value="male"
              {...register("gender", { required: "Gender is required" })}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="female"
              {...register("gender", { required: "Gender is required" })}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              value="other"
              {...register("gender", { required: "Gender is required" })}
            />
            Other
          </label>
          {errors.gender && <p className="error">{errors.gender.message}</p>}
        </div>

         <div className="info">
          <label>Address</label>
          <textarea
            placeholder="Enter your address"
            rows="4"
            cols="25"
            {...register("address", { required: "Address is required" })}
          ></textarea>
          {errors.address && <p className="error">{errors.address.message}</p>}
        </div>

         <div className="button">
          <button type="submit">Sign Up</button>
        </div>

        <h6>
          Already have an account? <Link to="/login">LogIn</Link>
        </h6>

        
    </form>

    </div>
  )
}

export default signUp;