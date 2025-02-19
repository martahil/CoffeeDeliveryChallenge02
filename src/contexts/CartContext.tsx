import { createContext, ReactNode, useContext, useState, useEffect } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageSrc: string;
  imageAlt: string;
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item: CartItem) {

    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }

      return [...prevCart, item];
    });
  }

  function removeFromCart(id: number) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  function updateQuantity(id: number, quantity: number) {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      );
    });
  }

  function clearCart() {
    setCart([]); 
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}