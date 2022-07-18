import React  from 'react'
import {Link} from 'react-router-dom'
//import {UserContext} from '../App'
const NavBar=()=>{
  //const {state , dispatch }= useContext(UserContext)
    return(
        <nav>
    <div className="nav-wrapper white" >
      <a href="/" className="brand-logo left">Instagram</a>
      <ul id="nav-mobile" className="right">
        <li><a href="/signin">Login</a></li>
        <li><a href="/signup">Signup</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/create"> create a post</a></li>

      </ul>
    </div>
  </nav>
        
    )
}
export default NavBar