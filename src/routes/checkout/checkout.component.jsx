import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";


const Checkout = () => {

    const {cartItems,addItemToCart} = useContext(CartContext)

    return (
        <div>
            <h1> Checkout page</h1>
           <div>
            {cartItems.map(cartitem => {
                return <div key={cartitem.id}>
                    <h2>{cartitem.name}</h2>
                    <p>{cartitem.quantity}</p>
                    <span onClick={() => addItemToCart(cartitem)}>increment</span>
                    <br/>
                    <span>decrement</span>
                </div>
            })}
           </div>
        </div>
    )
}


export default Checkout;