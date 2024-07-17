import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const productWithUniqueId = { ...product, cartId: uuidv4() };
        setCart((prevCart) => [...prevCart, productWithUniqueId]);
    };
    
    const removeFromCart = (cartId) => {
        setCart((prevCart) => prevCart.filter(item => item.cartId !== cartId));
    };
    
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
    };
    
    export const useCart = () => useContext(CartContext);
    