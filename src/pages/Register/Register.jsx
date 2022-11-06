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
        <h1>Belly Works</h1>
        <p>
        <h2>Great Work<span style={{color:'Green',fontSize:30}}>Happy Belly</span></h2>
        </p>
        <h2><span>Already have an account, Please</span></h2>
        <Link to="/login">
        <button><b>login</b></button>
        </Link>
        
      </div>
      <div className="right">
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="Possword" />
        <input type="text" placeholder="name" />
                
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
