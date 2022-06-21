import './checkout-item.styles.scss';


const CheckoutItem = ({cartitem}) => {
    const {id,price,name,quantity,imageUrl} = cartitem;
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button'>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;