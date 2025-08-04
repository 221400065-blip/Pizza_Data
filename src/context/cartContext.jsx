
import { createContext,useContext,useState,useEffect } from 'react';
const cartContext = createContext()

export function useCart() {
    return useContext(cartContext)
}
export function CartProvider({children}){
     const [cartItems, setCartItems] = useState(()=> {
        const stored = localStorage.getItem('cartItems');
        return stored ? JSON.parse(stored) : [];
     });

     useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
     },[cartItems]);

     const addToCart = (pizza,quantity,varient) => {
        const existingItem= cartItems.find(item => item._id === pizza._id && item.varient === varient);
        if(existingItem){
           const updatedCart=cartItems.map(item => 
                item._id === pizza._id && item.varient === varient 
                ? {...item, 
                quantity: item.quantity + quantity,
                price:pizza.prices[0][varient] * (item.quantity + quantity)}
                : item
            )
           setCartItems(updatedCart);            
        }
        else{
            setCartItems([...cartItems, 
                {  _id:pizza._id, 
                    name: pizza.name,
                    image: pizza.image,
                    quantity: quantity, 
                    varient: varient, 
                    price: pizza.prices[0][varient] * quantity}]);
        }
     }
     return (
        <cartContext.Provider
          value={{
            cartItems,
            addToCart,
          }}
        >
          {children}
        </cartContext.Provider>
      );
}

