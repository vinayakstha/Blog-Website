import React from "react";
import { Link } from "react-router-dom";
function Signup() {
    return (
        <div className="signupForm">
            <div className="signupFormChild">
                <div className="signupFormImage">
                </div>
                <div className="signupFormContent">
                    <h2>SIGN UP</h2>
                    <form action="#">
                        <div className="signupInputField">
                            <input type="text" placeholder="Username" required />
                        </div>
                        <div className="signupInputField">
                            <input type="text" placeholder="Email" required />
                        </div>
                        <div className="signupInputField">
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div className="signupInputField">
                            <input type="password" placeholder="Confirm Password" required />
                        </div>
                        <button type="submit" className="signupButton">Sign up</button>
                    </form>
                    <div className="signupBottomLink">
                        Have an account?
                        <Link to="/Login">Login</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Signup;