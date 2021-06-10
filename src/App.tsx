import { Badge, Drawer, Grid, LinearProgress } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { useState } from "react";
import { useQuery } from "react-query";
import { StyledButton, Wrapper } from "./App-styles";
import Cart from "./Components/Cart/Cart";
import Item from "./Components/Item/Item";

export type cartItemsTypes = {
    id : number;
    title : string;
    category : string;
    description : string;
    price : number;
    image : string;
    amount : number
}

const getProducts = async():  Promise<cartItemsTypes[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json()



const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as cartItemsTypes[])
  const {data, isLoading, error} = useQuery<cartItemsTypes[]>('products', getProducts)
  


  const handleAddToCart = (clickedItem : cartItemsTypes) => {
      setCartItems(prev => {
        const isItemAddedToCart = prev.find(item => item.id === clickedItem.id);

        if (isItemAddedToCart) {
          return prev.map(item => item.id === clickedItem.id 
            ?
            {...item, amount: item.amount + 1} : item
            )
        }
        return [...prev, {...clickedItem, amount : 1}]
      })
  };

  const handleRemoveFromCart = (id: number) => {
      setCartItems(prev => 
        prev.reduce((ack, item) => {
          if(item.id === id) {
            if(item.amount === 1) return ack;
            return [...ack, {...item, amount : item.amount - 1}];
          }
          else{
            return [...ack, item]
          }
        }, [] as cartItemsTypes[])
    )
  };

  const getTotalItems = (items : cartItemsTypes[]) => 
    items.reduce((ack : number, item) => ack + item.amount, 0)




  if(isLoading) return <LinearProgress/>;
  if(error) return <div>Something went Wrong!</div>
  
  return (
        <Wrapper>
            <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
                <Cart cartItems={cartItems} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart}/>
            </Drawer>
            <StyledButton onClick={() => setCartOpen(true)}>
              <Badge badgeContent={getTotalItems(cartItems)} color='error'>
                <AddShoppingCart/>
              </Badge>
            </StyledButton>
            <Grid container spacing={3}>
                {
                  data?.map(item => 
                    <Grid item key={item.id} xs={12} sm={4}>
                      <Item item={item} handleAddToCart={handleAddToCart}/>
                    </Grid>
                    )
                }
            </Grid>
        </Wrapper>
  );
}

export default App;
