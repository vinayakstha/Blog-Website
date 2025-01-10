import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import SignupCSS from "./Signup.module.css";

function Signup() {
    const navigate = useNavigate();
    return (
        <div className={SignupCSS["signup-form"]}>
            <div className={SignupCSS["signup-form-child"]}>
                <div className={SignupCSS["signup-form-image"]}>
                </div>
                <div className={SignupCSS["signup-form-content"]}>
                    <div className={SignupCSS["exit-button-container"]}>
                        <button onClick={() => navigate(-1)}>
                            <X />
                        </button>
                    </div>
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