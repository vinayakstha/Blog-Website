import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import React from "react";
import AdminLoginCSS from "./AdminLogin.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API } from "../../environment";
import { toast } from "react-toastify";

function AdminLogin() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        axios
            .post(`${API.BASE_URL}/api/admin/login`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                if (response.data && response.data.data.access_token) {
                    localStorage.setItem('token', response.data.data.access_token); // Store User Token
                    localStorage.setItem('role', 'admin'); // Store Role
                    toast.success('Admin login successful');
                    navigate('/AdminDashboard');
                } else {
                    toast.error('Admin login failed! Check credentials.');
                }
            })
            .catch((error) => {
                console.error('Error logging in:', error);
                toast.error('Error logging in. Please try again.');
            });
    };

    return (
        <div className={AdminLoginCSS["login-form"]}>
            <div className={AdminLoginCSS["login-form-child"]}>
                <div className={AdminLoginCSS["login-form-image"]}></div>
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
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: 'Invalid Email',
                                    },
                                })}
                            />
                        </div>
                        {errors.email && <p className={AdminLoginCSS['error-message']}>{errors.email.message}</p>}
                        <div className={AdminLoginCSS['input-field']}>
                            <input
                                type="password"
                                placeholder="Password"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 5,
                                        message: 'Must be longer than 5 characters',
                                    },
                                })}
                            />
                        </div>
                        {errors.password && <p className={AdminLoginCSS['error-message']}>{errors.password.message}</p>}
                        <button type="submit" className={AdminLoginCSS['login-button']}>Login</button>
                    </form>
                    <div className={AdminLoginCSS['bottom-link']}>
                        Are you a user? <Link to="/Login">User</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;

