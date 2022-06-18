
import './cart-item.styles.scss';

const CartItem = ({cartItem}) => {
    const {imageUrl,quantity,price, name} = cartItem    
    return (
        <div className='cart-item-container'>
            <img width="100%" src={imageUrl} alt={name} />
            
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'> {quantity} x ${price} </span>
            </div>
        </div>
    )

}

export default CartItem;