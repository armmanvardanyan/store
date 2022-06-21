import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';


const CheckoutItem = ({cartitem}) => {
    const {id,price,name,quantity,imageUrl} = cartitem;
    const {clearItemFromCart,addItemToCart,removeItemFromCart} = useContext(CartContext)

    const clearItemHandler = () => {
        clearItemFromCart(id)
    }

    const addItemHandler = () => {
        addItemToCart(cartitem)
    }
    const removeItemHandler = () => {
        removeItemFromCart(id)
    }

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <span className='arrow' onClick={removeItemHandler}>&#10094;</span>
                <span className='value'>{quantity}</span>
                <span className='arrow' onClick={addItemHandler}>&#10095;</span>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;