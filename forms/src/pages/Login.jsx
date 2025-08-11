import "../styles/Loginstyle.css";

function Loginpage() {
  return (
    <div class="login">
      <form>
        <div class="info">
          <h1> LOGIN </h1>
          <label> Email </label>
          <input type="text" placeholder="Email" id = "email"/>
        </div>

        <div class="info">
          <label> Password </label>
          <input type="password" placeholder="Password" id = "password"/>
        </div>


        <div class = "button">
          <input type = "submit"/>
        </div>
      </form>
    </div>
  );
}

export default Loginpage;
