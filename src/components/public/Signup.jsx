import React from "react";
import { Link } from "react-router-dom";
import SignupCSS from "./Signup.module.css";
function Signup() {
    return (
        <div className={SignupCSS["signup-form"]}>
            <div className={SignupCSS["signup-form-child"]}>
                <div className={SignupCSS["signup-form-image"]}>
                </div>
                <div className={SignupCSS["signup-form-content"]}>
                    <h2>SIGN UP</h2>
                    <form action="#">
                        <div className={SignupCSS["signup-input-field"]}>
                            <input type="text" placeholder="Username" required />
                        </div>
                        <div className={SignupCSS["signup-input-field"]}>
                            <input type="text" placeholder="Email" required />
                        </div>
                        <div className={SignupCSS["signup-input-field"]}>
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div className={SignupCSS["signup-input-field"]}>
                            <input type="password" placeholder="Confirm Password" required />
                        </div>
                        <button type="submit" className={SignupCSS["signup-button"]}>Sign up</button>
                    </form>
                    <div className={SignupCSS["signup-bottom-link"]}>
                        Have an account?
                        <Link to="/Login"> Login</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Signup;