import { ReactComponent as ShoppingSvg } from "../../images/shopping.svg";
import { ReactComponent as UserSvg } from "../../images/user.svg";
import { Link } from "react-router-dom";

function MobileHeaderThird() {
  return (
    <div id="mobile-header-third">
      <span className="badge">
        <UserSvg />
      </span>
      <Link to="/cart">
      <span className="badge" id="shopping-badge">
      
          <div>
            <ShoppingSvg />
            <span id="mobile-shopping-badge">0</span>
          </div>
          </span>
        </Link>
     
    </div>
  );
}

export default MobileHeaderThird;
