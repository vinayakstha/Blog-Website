import { useNavigate, Link } from "react-router-dom";
import NavbarCSS from "./Navbar.module.css";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../../environment";
function Navbar() {
    const navigate = useNavigate();
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const loginPage = () => {
        navigate("/Login")
    }
    const logout = () => {
        localStorage.removeItem("token");
        toast.success("Logout successful")
        navigate("/");
    };

    // useEffect(() => {
    //     verifyToken();
    // }, []);


    return (
        <div className={NavbarCSS["navbar"]}>
            <div className={NavbarCSS["website-name"]}>
                <h3 className={NavbarCSS["title"]}>WRITEHAVEN</h3>
            </div>
            {/* <ul className={NavbarCSS["list"]}>
                <li className={NavbarCSS["nav-li"]}><Link to="/">HOME</Link></li>
                <li className={NavbarCSS["nav-li"]}><Link to="/Post">POSTS</Link></li>
                {isLoggedIn && (
                    <li className={NavbarCSS["nav-li"]}><Link to="/CreatePost">CREATE POST</Link></li>
                )}
            </ul>

            <div className={NavbarCSS["login-btn-container"]}>
                {isLoggedIn ? (
                    <button className={NavbarCSS["login-btn"]} onClick={logout}>Logout</button>
                ) : (
                    <button className={NavbarCSS["login-btn"]} onClick={loginPage}>Login</button>
                )}
            </div> */}

            <ul className={NavbarCSS["list"]}>
                {!localStorage.getItem("token") ? (
                    <li className={NavbarCSS["nav-li"]}>  <Link to="/">HOME</Link></li>
                ) : (
                    <li className={NavbarCSS["nav-li"]}>  <Link to="/CreatePost">CREATE</Link></li>
                )}

                <li className={NavbarCSS["nav-li"]}><Link to="/Post">POSTS</Link></li>

            </ul>



            <div className={NavbarCSS["login-btn-container"]}>
                {localStorage.getItem("token") ? (
                    <button className={NavbarCSS["login-btn"]} onClick={logout}>Logout</button>
                ) : (
                    <button className={NavbarCSS["login-btn"]} onClick={loginPage}>Login</button>
                )}
            </div>
        </div>
    )
}
export default Navbar;