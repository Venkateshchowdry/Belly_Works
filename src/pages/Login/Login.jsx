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
        <h1>Hello World. .</h1>
        <p>
        INDIA is my country. <span style={{color:'red'}}>rest of world are my bitches</span>
        </p>
        <span>Don't have an account</span>
        <Link to="/register">
        <button><b>Register</b></button>
        </Link>
      </div>
      <div className="right">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Possword" />
        <div className="login_buttons">
          <button>LOGIN</button> 
          <button>Forgot Password</button>
        </div>
      </form>
      </div>
    </div>
  </div>
  )
  }
export default Login 
