import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AdminProtectedRoute = () => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || role !== 'admin') {
        return <Navigate to="/AdminLogin" />;
    }

    return <Outlet />;
};

export default AdminProtectedRoute;