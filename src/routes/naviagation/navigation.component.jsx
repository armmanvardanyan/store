import { Link, NavLink, Outlet } from "react-router-dom";
import "./navigation.style.scss"
import {ReactComponent as CrownLogo} from "../../assets/crown.svg"


const Navigation = () => {
    return (
      <>  
          <div className="navigation">
               <Link to={'/'} className="logo-container">
                    <CrownLogo className="logo"/>
               </Link>
               <div className="nav-links_container">
                    <NavLink to={'/'} className = "nav-link">Home</NavLink>
                    <NavLink to={'/shop'} className = "nav-link">Shop</NavLink>
               </div>   
          </div> 
           <Outlet/>
      </>
    )
 }



export default Navigation;