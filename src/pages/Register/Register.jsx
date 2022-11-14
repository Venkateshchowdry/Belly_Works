import "./register.scss";
import{
  Link,
  // Route,
}from "react-router-dom";

const Register = () =>{
  return (
    <div className="register">
     <div className="body">
      <div className="left">
        <h2>Hungry Bird ?</h2>
        <p>
        <h1>Login to have your nest.</h1>
        </p>
        <span>Already a Bird ?, Please login to your nest.</span>
        <Link to="/login">
        <button><b>login</b></button>
        </Link>
        
      </div>
      <div className="right">
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="Possword" />
        {/* <input type="text" placeholder="name" /> */}
                
        <div className="login_buttons">
          <button>Register</button> 
        </div>
      </form>
      </div>
    </div>
  </div>
  )
  }
export default Register 
