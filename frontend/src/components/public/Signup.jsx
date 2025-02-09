import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import SignupCSS from "./Signup.module.css";
import axios from "axios";
import { API } from "../../environment";

function Signup() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    function onSubmit(data) {
        console.log(data);
        axios.post(`${API.BASE_URL}/api/user`, data, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                console.log("signup response: ", response);
                if (response.data) {
                    alert("signup successful");
                    navigate("/Login");
                } else {
                    alert("signup failed");
                }
            })
            .catch((error) => {
                console.error("error", error);
                alert("error signing up");
            });
    }

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={SignupCSS["signup-input-field"]}>
                            <input type="text" placeholder="Username"
                                {...register("username", {
                                    required: "Username is required",
                                    minLength: {
                                        value: 4,
                                        message: "Must be longer than 4 characters"
                                    }
                                }
                                )} />
                        </div>
                        {errors.username && <p className={SignupCSS["error-message"]}>{errors.username.message}</p>}

                        <div className={SignupCSS["signup-input-field"]}>
                            <input type="text" placeholder="Email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Invalid Email"
                                    }
                                }
                                )} />
                        </div>
                        {errors.email && <p className={SignupCSS["error-message"]}>{errors.email.message}</p>}

                        <div className={SignupCSS["signup-input-field"]}>
                            <input type="password" placeholder="Password"
                                {...register("password", {
                                    required: "Password is required",
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
                                        message: "Must include letters and numbers"
                                    },
                                    minLength: {
                                        value: 5,
                                        message: "Must be longer than 5 characters"
                                    }
                                })}
                            />
                        </div>
                        {errors.password && <p className={SignupCSS["error-message"]}>{errors.password.message}</p>}
                        <div className={SignupCSS["signup-input-field"]}>
                            <input type="password" placeholder="Confirm Password"
                                {...register("confirmPassword", {
                                    required: "Password is required",
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
                                        message: "Must include letters and numbers"
                                    },
                                    minLength: {
                                        value: 5,
                                        message: "Must be longer than 5 characters"
                                    }
                                })}
                            />
                        </div>
                        {errors.confirmPassword && <p className={SignupCSS["error-message"]}>{errors.confirmPassword.message}</p>}
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