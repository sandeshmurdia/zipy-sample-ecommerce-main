import { useState } from "react"
import { SignIn } from "../../API/api"
export default function SigninBox({open, onClose}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const signIn = () => {
SignIn();
        setLoading(true)
        console.log("User has signed in")
        window.zipy.identify(email, {
            "firstName": "Aanchal",
            "lastName": "Rastogi",
            "customer-name": "Ecommerce-electronics",
            "customer-plan": "Free"
         });

        window.localStorage.setItem('signin', true)
        console.error("Failed to retrieve user information")
        setTimeout(() => {
            setLoading(false)
            onClose()
        }, 2000)
    }

    return (
        <>
            {open && <div className="signin-box">
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email ID" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                <button className="signin-button long" disabled={loading} onClick={signIn}>
                    {loading ? 'Please wait...' : 'Sign In'}
                </button>
            </div>}
        </>
    )
}
