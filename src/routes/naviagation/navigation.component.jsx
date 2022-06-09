import { Link, NavLink, Outlet } from "react-router-dom";
import "./navigation.style.scss"
import {ReactComponent as CrownLogo} from "../../assets/crown.svg"
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";


const Navigation = () => {
     const {currentUser} = useContext(UserContext)
    return (
      <>  
          <div className="navigation">
               <Link to={'/'} className="logo-container">
                    <CrownLogo className="logo"/>
               </Link>
               <div className="nav-links_container">
                    <NavLink to={'/'} className = "nav-link">Home</NavLink>
                    <NavLink to={'/shop'} className = "nav-link">Shop</NavLink>
                    <NavLink to={'/auth'} className = "nav-link">Sign in</NavLink>
               </div>   
          </div> 
           <Outlet/>
      </>
    )
 }



export default Navigation;