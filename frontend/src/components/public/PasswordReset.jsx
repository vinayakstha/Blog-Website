import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import PasswordResetCSS from "./PasswordReset.module.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { API } from "../../environment";

function PasswordReset() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    function onSubmit(data) {
        console.log(data);
        axios.post(`${API.BASE_URL}/api/user/resetPassword`, data, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                console.log("Password reset response:", response);
                if (response.status === 200) {
                    toast.success("Changed password successfully");
                    navigate("/Login");
                } else if (response.status === 401) {
                    toast.error("Invalid Credentials");
                } else {
                    toast.error("Password reset failed");
                }
            })
            .catch((error) => {
                console.error("Error resetting password:", error);

                toast.error("Error resetting password. Please try again.");

            });
    }
    return (
        <div className={PasswordResetCSS["password-reset-form"]}>
            <div className={PasswordResetCSS["password-reset-form-child"]}>
                <div className={PasswordResetCSS["password-reset-form-image"]}>
                </div>
                <div className={PasswordResetCSS["password-reset-form-content"]}>
                    <div className={PasswordResetCSS["exit-button-container"]}>
                        <button onClick={() => navigate(-1)}>
                            <X />
                        </button>
                    </div>
                    <h2>Change Password</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={PasswordResetCSS["password-reset-input-field"]}>
                            <input type="text" placeholder="Email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Invalid Email"
                                    }
                                })}
                            />
                        </div>
                        {errors.email && <p className={PasswordResetCSS["error-message"]}>{errors.email.message}</p>}

                        <div className={PasswordResetCSS["password-reset-input-field"]}>
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
                        {errors.password && <p className={PasswordResetCSS["error-message"]}>{errors.password.message}</p>}

                        <div className={PasswordResetCSS["password-reset-input-field"]}>
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
                        {errors.confirmPassword && <p className={PasswordResetCSS["error-message"]}>{errors.confirmPassword.message}</p>}

                        <button type="submit" className={PasswordResetCSS["password-reset-button"]}>Confirm</button>
                    </form>
                    <div className={PasswordResetCSS["password-reset-bottom-link"]}>
                        Remember your password?
                        <Link to="/Login"> Login</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PasswordReset;