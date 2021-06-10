import React from 'react';
import { cartItemsTypes } from '../../App';
import CartItem from '../CartItem/CartItem';
import { Wrapper } from './Cart.styles';

type Props = {
    cartItems : cartItemsTypes[];
    handleAddToCart : (clickedItem : cartItemsTypes) => void;
    handleRemoveFromCart : (id : number) => void;
}

const Cart:React.FC<Props> = ({cartItems, handleAddToCart, handleRemoveFromCart}) => {
    const calculateTotal = (items : cartItemsTypes[]) => 
        items.reduce((ack: number, item) => ack + item.amount * item.price, 0)
    
    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p>No items in Cart</p> : null}
            {cartItems.map(item => (
                <CartItem 
                key={item.id} 
                item={item} 
                handleAddToCart={handleAddToCart} 
                handleRemoveFromCart={handleRemoveFromCart} />
            ))}
            <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>
    );
};

export default Cart;