import React, { createContext, useState } from 'react';

// Step 1: Context banao
const CartContext = createContext();

// Step 2: Provider component banao
function CartProvider({ children }) {
  // cart mein products ki list rakhein ge
  const [cartItems, setCartItems] = useState([]);
  // total kitne items hain
  const [cartCount, setCartCount] = useState(0);

  // cart mein product add karne ka function
  function addToCart(product) {
    setCartItems([...cartItems, product]);
    setCartCount(cartCount + 1);
    // simple alert dikha denge
    alert(product.name + " added in cart section! 🛒");
  }

  // Step 3: Value banao jo sab ko deni hai
  const value = {
    cartItems: cartItems,
    cartCount: cartCount,
    addToCart: addToCart
  };

  // children = App aur uske andar ka sab kuch
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Context export karo taake dusri files use kar saken
export { CartContext, CartProvider };