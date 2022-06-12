import { Link, NavLink, Outlet } from "react-router-dom";
import "./navigation.style.scss"
import {ReactComponent as CrownLogo} from "../../assets/crown.svg"
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";


const Navigation = () => {
     const {currentUser} = useContext(UserContext);
     const {isCartOpen} = useContext(CartContext);

     const signOutHandler = async () => {
          await signOutUser();
     }

    return (
      <>  
          <div className="navigation">
               <Link to={'/'} className="logo-container">
                    <CrownLogo className="logo"/>
               </Link>
               <div className="nav-links_container">
                    <NavLink to={'/shop'} className = "nav-link">Shop</NavLink>
                    {
                         currentUser
                         ? <span onClick={signOutHandler} className="nav-link">Sign Out</span>
                         : <NavLink to={'/auth'} className = "nav-link">Sign in</NavLink>
                    }
                    <CartIcon/>
                   
               </div>   
               {isCartOpen && <CartDropdown/>}
          </div> 
           <Outlet/>
      </>
    )
 }



export default Navigation;