import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ShoppingSvg } from "../../images/shopping.svg";
import { ReactComponent as HeartSvg } from "../../images/heart.svg";
import { ReactComponent as UserSvg } from "../../images/user.svg";
import SigninBox from "./SigninBox";
function HeaderMainRight() {
  const [openSignInBox, setOpenSignInBox] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  const isSignedIn = window.localStorage.getItem("signin");

  useEffect(() => {
    setSignedIn(isSignedIn === "true");
  }, [isSignedIn]);

  const handleOpenSignin = () => {
    setOpenSignInBox(!openSignInBox);
  };

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget) && openSignInBox) {
      setOpenSignInBox(false);
    }
  };

  const handleSignOut = () => {
    window.zipy.anonymize();
    console.log("User signed out successfully");
    window.localStorage.removeItem("signin");
    setSignedIn(false);
  };

  return (
    <div id="header-main-right">
      <div className="user-options">
        <Link to="/cart">
          <div>
            <ShoppingSvg />
            <span id="shopping-badge">0</span>
          </div>
        </Link>

        <div>
          <HeartSvg />
        </div>
        <div>
          <UserSvg />
        </div>
      </div>
      <div>
        {signedIn && (
          <div className="account-options">
            <button
              className="secondary-color no-border "
              id="sign-in"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
            <a href="#" className="secondary-grey-color" id="my-account">
              My Account <i class="fa-solid fa-caret-down i-tag"></i>
            </a>
          </div>
        )}
        {!signedIn && (
          <div className="signin-container" onBlur={handleBlur}>
            <button className="signin-button" onClick={handleOpenSignin}>
              Sign In
            </button>
            <SigninBox
              open={openSignInBox}
              onClose={() => setOpenSignInBox(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default HeaderMainRight;
