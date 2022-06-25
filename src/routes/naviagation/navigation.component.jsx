import {  Outlet } from "react-router-dom";
import {ReactComponent as CrownLogo} from "../../assets/crown.svg"
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import { NavigationContainer,LogoContainer,NavLinks,NavLink } from "./navigation.style";



const Navigation = () => {
     const {currentUser} = useContext(UserContext);
     const {isCartOpen} = useContext(CartContext);

     const signOutHandler = async () => {
          await signOutUser();
     }

    return (
      <>  
          <NavigationContainer>
               <LogoContainer to={'/'} >
                    <CrownLogo className="logo"/>
               </LogoContainer>
               <NavLinks>
                    <NavLink to={'/shop'}>Shop</NavLink>
                    {
                         currentUser
                         ? <NavLink as = "span" onClick={signOutHandler}>Sign Out</NavLink>
                         : <NavLink to={'/auth'}>Sign in</NavLink>
                    }
                    <CartIcon/>
               </NavLinks>   
               {isCartOpen && <CartDropdown/>}
          </NavigationContainer> 
           <Outlet/>
      </>
    )
 }



export default Navigation;