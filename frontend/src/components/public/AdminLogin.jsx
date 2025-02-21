import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import React from "react";
import AdminLoginCSS from "./AdminLogin.module.css";
import { useForm } from "react-hook-form";

function Login() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    function onSubmit(data) {
        console.log(data);
    }
    return (
        <div className={AdminLoginCSS["login-form"]}>
            <div className={AdminLoginCSS["login-form-child"]}>
                <div className={AdminLoginCSS["login-form-image"]}>
                </div>
                <div className={AdminLoginCSS["login-form-content"]}>
                    <div className={AdminLoginCSS["exit-button-container"]}>
                        <button onClick={() => navigate("/Login")}>
                            <X />
                        </button>
                    </div>
                    <h2>ADMIN</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={AdminLoginCSS["input-field"]}>
                            <input
                                type="text"
                                placeholder="Email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Invalid Email"
                                    }
                                }
                                )} />
                        </div>
                        {errors.email && <p className={AdminLoginCSS["error-message"]}>{errors.email.message}</p>}
                        <div className={AdminLoginCSS["input-field"]} id="loginPagePassword">
                            <input
                                className={AdminLoginCSS["loginPagePaswordInput"]}
                                type="password" placeholder="Password"
                                {...register("password",
                                    {
                                        required: "Password is required",
                                        pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
                                            message: "Must include letters and numbers"
                                        },
                                        minLength: {
                                            value: 5,
                                            message: "Must be longer than 5 characters"
                                        }
                                    }
                                )} />
                        </div>
                        {errors.password && <p className={AdminLoginCSS["error-message"]}>{errors.password.message}</p>}
                        {/* <Link to="/PasswordReset" className={AdminLoginCSS["forgot-password"]}>Forgot password?</Link> */}
                        <button type="submit" className={AdminLoginCSS["login-button"]}>Login</button>
                    </form>
                    <div className={AdminLoginCSS["bottom-link"]}>
                        Are you a user?
                        <Link to="/Login"> User</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;