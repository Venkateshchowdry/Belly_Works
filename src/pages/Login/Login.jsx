import "./login.scss"
import{
  Link,
  Route,
}from "react-router-dom";

const Login = () =>{
  return (
    <div className="login">
     <div className="body">
      <div className="left">
        <h1>Hello Birds..</h1>
        <p>
        Welcome to the world of oppurtunities...
        </p>
        <p>
        Our objective is to develop a bridge that aims to help people discover new oppurtunities near by that suit their time and skills.
        </p>
        <span>Don't have an account! create one now.</span>
        <Link to="/register">
        <button><b>Sign Up</b></button>
        </Link>
      </div>
      <div className="right">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Possword" />
        <span>
          <button type="submit">Login</button>
          </span>
          <span>
          <button type="forgot">Forgot Password</button>
        </span>
      </form>
      </div>
    </div>
  </div>
  )
  }
export default Login 
