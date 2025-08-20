import "../styles/Loginstyle.css";
import { useRef  } from "react";
import { Link } from 'react-router-dom';

function Loginpage() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  function storeData() {
    localStorage.setItem("email", emailRef.current.value);
    localStorage.setItem("password", passwordRef.current.value);
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
            ref={emailRef}
            required
          />
        </div>

        <div className="info">
          <label> Password </label>
          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </div>

        <div className="button">
          <input type="submit" onClick={storeData} />
        </div>
          <h6> Don't have an account? <Link to="/Signup">Signup </Link></h6>
      </form>
    </div>
  );
}

export default Loginpage;
