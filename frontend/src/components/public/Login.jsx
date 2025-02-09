import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import React from "react";
import LoginCSS from "./Login.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API } from "../../environment";
import { toast } from "react-toastify";

function Login() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    function onSubmit(data) {
        console.log(data);

        axios
            .post(`${API.BASE_URL}/api/auth/login`, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                // Log the entire response to inspect the structure
                // console.log("Login Response:", response.data.data.access_token);

                // Check if access_token exists inside response.data
                if (response.data && response.data.data.access_token) {
                    // console.log("Access Token:", response.data.data.access_token);
                    localStorage.setItem("token", response.data.data.access_token); // Store Token
                    toast.success("Login successful");
                    navigate("/CreatePost");

                } else {
                    toast.error("Login failed! Check credentials.");
                }
            })
            .catch((error) => {
                console.error("Error logging in:", error);
                toast.error("Error logging in. Please try again.");
            });

        // reset();
    }
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={LoginCSS["input-field"]}>
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
                        {errors.email && <p className={LoginCSS["error-message"]}>{errors.email.message}</p>}
                        <div className={LoginCSS["input-field"]} id="loginPagePassword">
                            <input
                                className={LoginCSS["loginPagePaswordInput"]}
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
                        {errors.password && <p className={LoginCSS["error-message"]}>{errors.password.message}</p>}
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