import {CartDropdownContainer, EmptyMssage, CartItems} from './cart-dropdown.styles.jsx'
import Button from '../../components/button/button.component'
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {

 const {cartItems} = useContext(CartContext)
 const navigate = useNavigate()  


 const goToCheckoutHandler = () => {
   navigate('/checkout')
 }
 
 let renderedCartItems = <EmptyMssage>Your cart is empty</EmptyMssage>;

 if(cartItems.length) {
   renderedCartItems =  cartItems.map(item => {
    return <CartItem key = {item.id} cartItem = {item} />
  })
 }

 return <CartDropdownContainer>
    <CartItems>
      {renderedCartItems}
    </CartItems>
    <Button onClick = {goToCheckoutHandler}> Checkout</Button>
 </CartDropdownContainer>
}

export default CartDropdown;