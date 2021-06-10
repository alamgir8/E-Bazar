import { Button } from '@material-ui/core';
import React from 'react';
import { cartItemsTypes } from '../../App';
import { Wrapper } from './CartItem.styles';



type Props = {
    item : cartItemsTypes;
    handleAddToCart : (clickedItems : cartItemsTypes) => void;
    handleRemoveFromCart : (id : number) => void;
}
const CartItem:React.FC<Props> = ({item, handleAddToCart, handleRemoveFromCart}) => {
    return (
        <Wrapper>
            <div>
                <h3>{item.title}</h3>
                <div className="information">
                    <p>Price: ${item.price}</p>
                    <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
                </div>
                <div className="buttons">
                    <Button onClick={() => handleRemoveFromCart(item.id)} size='small' disableElevation variant='contained'>
                        -
                    </Button>
                    <p>{item.amount}</p>
                    <Button onClick={() => handleAddToCart(item)} size='small' disableElevation variant='contained'>
                        +
                    </Button>
                </div>
            </div>
            <img src={item.image} alt={item.title} />
        </Wrapper>
    );
};

export default CartItem;