import './product-card.styles.scss';
import Button,{BUTTUN_TYPE_CLASSES} from '../button/button.component'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';



const ProductCard = ({product}) => {
    
    const {name, price,imageUrl,id} = product;

    const {addItemToCart} = useContext(CartContext)

   

    return <div className='product-card-container'>
        <img src={imageUrl} alt = {name}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType={BUTTUN_TYPE_CLASSES.inverted} onClick = {() => addItemToCart(product)} >Add to card</Button>
    </div>
}

export default ProductCard;