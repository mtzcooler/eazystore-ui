import {
  createContext,
  useState,
  useEffect,
  useContext,
  useReducer,
} from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // Initialize cart state from localStorage or as an empty array
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
      return [];
    }
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cart]);

  // Add product to the cart
  const addProduct = (product, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.productId === product.productId
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.productId === product.productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  // Remove product from the cart
  const removeProduct = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.productId !== productId)
    );
  };

  // Accumulate total quantity of items in the cart
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext value={{ cart, addProduct, removeProduct, totalQuantity }}>
      {children}
    </CartContext>
  );
};
