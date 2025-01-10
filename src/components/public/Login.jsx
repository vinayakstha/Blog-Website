import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import React from "react";
import LoginCSS from "./Login.module.css";

function Login() {
    const navigate = useNavigate();
    return (
        <div className={LoginCSS["login-form"]}>
            <div className={LoginCSS["login-form-child"]}>
                <div className={LoginCSS["login-form-image"]}>
                </div>
                <div className={LoginCSS["login-form-content"]}>
                    <div className={LoginCSS["exit-button-container"]}>
                        <button onClick={() => navigate("/")}>
                            <X />
                        </button>
                    </div>
                    <h2>LOGIN</h2>
                    <form action="#">
                        <div className={LoginCSS["input-field"]}>
                            <input type="text" placeholder="Email" required />
                        </div>
                        <div className={LoginCSS["input-field"]} id="loginPagePassword">
                            <input className={LoginCSS["loginPagePaswordInput"]} type="password" placeholder="Password" required />
                        </div>
                        <Link to="/PasswordReset" className={LoginCSS["forgot-password"]}>Forgot password?</Link>
                        <button type="submit" className={LoginCSS["login-button"]}>Login</button>
                    </form>
                    <div className={LoginCSS["bottom-link"]}>
                        Don't have an account?
                        <Link to="/Signup"> Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;