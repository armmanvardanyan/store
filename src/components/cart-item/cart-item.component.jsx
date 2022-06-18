
import './cart-item.styles.scss';

const CartItem = ({cartItem}) => {
    const {imageUrl,quantity,price, name} = cartItem    
    return (
        <div>
            <img width="100%" src={imageUrl} />
            <span>{name}</span>
            <span> {quantity}  x  <span>{price}</span> </span>
        </div>
    )

}

export default CartItem;