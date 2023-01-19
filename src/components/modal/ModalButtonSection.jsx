import { ReactComponent as CartSvg } from "../../images/modal-cart.svg";
import { buyProduct } from "../../API/api";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { Link } from "react-router-dom";
function ModalButtonSection(props) {
  const context = useContext(ThemeContext);

  const handleBuy = () => {
    context.updateCart(props);
    buyProduct();
  };

  return (
   <div id="modal-button-section">
      
   <Link to="/cart">
      <button className="pointer" id="buy-now" onClick={handleBuy}>
        Buy Now
      </button></Link>
<Link to="/cart">
      <button className="pointer" id="add-to-cart" onClick={handleBuy}>
        Add to Cart <CartSvg />
      </button></Link>
    </div>
  );
}

export default ModalButtonSection;
