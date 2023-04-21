import "@/styles/globals.css";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const cartLS =
    //because this renders on client side not server side
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart")) ??
        /*when is the first time*/ []
      : [];
  const [cart, setCart] = useState(cartLS);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addGuitar = (guitar) => {
    // check if the guitar exits
    if (cart.some((guitarState) => guitarState.id === guitar.id)) {
      // update quantity
      const updatedCart = cart.map((guitarState) => {
        if (guitarState.id === guitar.id) {
          guitarState.cantidad = guitar.cantidad;
        }
        return guitarState;
      });
      // array
      setCart([...updatedCart]);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      // new guitar
      setCart([...cart, guitar]);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const deleteGuitar = (id) => {
    const updatedCart = cart.filter((item) => item.id != id);
    setCart(updatedCart);
    window.localStorage.setItem("cart", JSON.stringify(cart));
  };

  const updateQty = (guitar) => {
    const updatedCart = cart.map((guitarState) => {
      if (guitarState.id === guitar.id) {
        guitarState.qty = parseInt(guitar.qty);
      }
      return guitarState;
    });
    setCart(updatedCart);
    window.localStorage.setItem("cart", JSON.stringify(cart));
  };

  return loaded ? (
    <Component
      {...pageProps}
      cart={cart}
      deleteGuitar={deleteGuitar}
      updateQty={updateQty}
      addGuitar={addGuitar}
    />
  ) : null;
}
