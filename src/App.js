
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/cart/Cart";
import LandingPage from "./Pages/Landingpage";
import React, {createContext}  from "react";



 
const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/cart',
    element: <Cart />
  }
])

export const ThemeContext = createContext({
  cartItem: [],
  updateCart: () => {}
}); 
  


function App() {
  const [cartItem, setCartItems] = React.useState([]);

  const updateCart = (value) => {

    setCartItems(setValue => [...setValue,value]);
  
  }
  return (
    <>  
    <ThemeContext.Provider value={{
      cartItem: cartItem,
      updateCart: updateCart
    }}>
      <RouterProvider router={router}/>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
