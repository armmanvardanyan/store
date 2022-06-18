import { useState } from "react";
import { createContext } from "react";


const addCartItem = (cartItems,productToAdd) => {
    let existingProductIdx = cartItems.findIndex(cartitem => cartitem.id === productToAdd.id);

    if(existingProductIdx !== -1) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id  ? 
            {...cartItem, quantity: cartItem.quantity + 1} : 
            cartItem)
    }  
    return [...cartItems,{...productToAdd, quantity: 1}]
   
}

const removeCartItem = (cartItems,id) => {
    let existingItem = cartItems.find(cartItem => cartItem.id === id)

    if(existingItem.quantity === 1) {
        return cartItems.filter( item => item.id !== id)
    }

    return cartItems.map(cartItem => cartItem.id === existingItem.id  ? 
        {...cartItem, quantity: cartItem.quantity - 1} : 
        cartItem)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart : (id) => {}

})


export const CartProvider = ({children}) => {

    const [isCartOpen,setIsCartOpen] = useState(false)
    const [cartItems,setCartItems] = useState([])
    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd))
    }

    const removeItemFromCart = (id) => {
        setCartItems(removeCartItem(cartItems,id))
    }

    const cartItemsCount = cartItems.reduce((acc,curr) => acc + curr.quantity , 0  )

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        cartItems,
        cartItemsCount 
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

}

