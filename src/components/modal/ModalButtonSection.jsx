import { ReactComponent as CartSvg } from "../../images/modal-cart.svg";
import { buyProduct, throwerror, throwerror201 } from "../../API/api";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { Link } from "react-router-dom";
import { randomerror } from "../../API/randomerror";
import { randomfrontenderror } from "../../API/randomfrontenderror";
function ModalButtonSection(props) {
  const context = useContext(ThemeContext);

  const handleBuy = () => {
    context.updateCart(props);
    throwerror201();
    randomerror();
    randomfrontenderror();
  };

  return (
    <div id="modal-button-section">
      <Link to="/cart">
        <button className="pointer" id="buy-now" onClick={handleBuy}>
          Buy Now
        </button>
      </Link>
      <Link to="/cart">
        <button className="pointer" id="add-to-cart" onClick={handleBuy}>
          Add to Cart <CartSvg />
        </button>
      </Link>
    </div>
  );
}

export default ModalButtonSection;
