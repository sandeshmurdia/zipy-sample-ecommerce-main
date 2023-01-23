import { useState } from "react";
import { SignIn } from "../../API/api";
export default function SigninBox({ open, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signIn = () => {
    SignIn();
    setLoading(true);
    console.log("User has signed in");
    window.zipy.identify(email, {
      firstName: "Sandesh",
      lastName: "Murdia",
      customername: "Zipy-Ecommerce",
      customerplan: "Free",
    });

    window.localStorage.setItem("signin", true);
    setTimeout(() => {
      setLoading(false);
      onClose();
    }, 2000);
  };

  return (
    <>
      {open && (
        <div className="signin-box">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email ID"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
          <button
            className="signin-button long"
            disabled={loading}
            onClick={signIn}
          >
            {loading ? "Please wait..." : "Sign In"}
          </button>
        </div>
      )}
    </>
  );
}
