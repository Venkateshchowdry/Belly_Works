import "./Navbar.scss"
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';


import { Link } from "react-router-dom";
import DarkModeTwoTone from "@mui/icons-material/DarkModeTwoTone";



const NavBar = () => {
  return (
    <div className= 'Navbar'>
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
          <span>Belly Works</span>
          </Link>
          <HomeTwoToneIcon/>
          <DarkModeTwoTone/>
          <GridViewTwoToneIcon/>
          <div className="search">
            <SearchTwoToneIcon/>
            <input type="text"  placeholder="search...."/>
          </div>
        
        
      </div>
      <div className="right">
        <PersonOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className="user">
          {/* <img src="" alt=" " /> */}
          <span>venkat</span>
          {/* <Link to="/profile" style={{textDecoration:"none"}}></Link> */}
        </div>


      </div>


    </div>
  )
};
export default NavBar
