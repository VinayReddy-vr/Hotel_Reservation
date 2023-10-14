import { useNavigate } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {

 const navigate = useNavigate();
 const handleRoute =()=>{
       navigate("/login");
 }
  return (
    <div className='navbar'>
        <div className='navContainer'>
           <span className='logo'>TravelPedia</span>
          <div className="navItems">
            <button className="navButton" onClick={handleRoute}>Register</button>
            <button className="navButton" onClick={handleRoute}>Login</button>
          </div>  
        </div>
    </div>
  )
}

export default Navbar