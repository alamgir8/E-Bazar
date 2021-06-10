import { Button } from '@material-ui/core';
import React from 'react';
import { cartItemsTypes } from '../../App';
import { Wrapper } from './Item-styles';

type Props = {
    item : cartItemsTypes;
    handleAddToCart: (clickedItem : cartItemsTypes) => void;
}
const Item : React.FC<Props> = ({item, handleAddToCart}) => {
    return (
        <Wrapper>
            <img src={item.image} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>${item.price}</h3>
            </div>
            <Button onClick={() => handleAddToCart(item)}>
                Add to Cart
            </Button>
        </Wrapper>
    );
};

export default Item;