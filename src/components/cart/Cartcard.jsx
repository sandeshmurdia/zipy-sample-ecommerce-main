import React from "react";
import "./Cartcard.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import Cartdetails from "./Cartdetails";
import { Link } from "react-router-dom";
import { ReactComponent as ShoppingSvg } from "../../images/shopping.svg";
import { randomerror } from "../../API/randomerror";
import { randomfrontenderror } from "../../API/randomfrontenderror";
import { throwerror202 ,throwerror203} from "../../API/api";
const checkout = () => {
  throwerror202();
randomerror();
randomfrontenderror(); 
 };
const clearcart = () => {
  throwerror203();
  randomerror();
randomfrontenderror();  
  
};
const Cartcard = () => {
  const context = useContext(ThemeContext);
  return (
    <>
      <header className="headercart">
        <div className="continue-shopping">
        <Link to="/">
            <div  >
            <h3>Go Back</h3>
        </div>
        </Link>
         
        </div>

        <div className="cart-icon">
<ShoppingSvg/>
        
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {context.cartItem.map((item) => (
               
               <Cartdetails
                  path={item.path}
                  text={item.text}
                  price={item.price}
                />
              ))}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : <span>$19999</span>
          </h3>
          <button onClick={checkout}>checkout</button>
          <button className="clear-cart" onClick={clearcart}>Clear Cart</button>
        </div>
      </section>
    </>
  );
};
export default Cartcard;
