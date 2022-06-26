
import {CartItemContainer,CartItemsDetails} from './cart-item.styles.jsx';

const CartItem = ({cartItem}) => {
    const {imageUrl,quantity,price, name} = cartItem    
    return (
        <CartItemContainer>
            <img width="100%" src={imageUrl} alt={name} />
            <CartItemsDetails>
                <span className='name'>{name}</span>
                <span className='price'> {quantity} x ${price} </span>
            </CartItemsDetails>
        </CartItemContainer>
    )

}

export default CartItem;