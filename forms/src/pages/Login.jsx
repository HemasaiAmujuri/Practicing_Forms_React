import "../styles/Loginstyle.css";
import React from "react";
import { useState } from "react";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setEmail('');
    setPassword('');
  };

  function storeData() {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }


  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <div className="info">
          <h1> LOGIN </h1>
          <label> Email </label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="info">
          <label> Password </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="button">
          <input type="submit" onClick={storeData} />
        </div>
          <h6> Don't have an account? <a href = "./Signup.jsx">signUp</a></h6>
      </form>
    </div>
  );
}

export default Loginpage;
