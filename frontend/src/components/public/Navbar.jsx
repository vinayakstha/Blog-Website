import { useNavigate, Link } from "react-router-dom";
import NavbarCSS from "./Navbar.module.css";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../../environment";
import { CircleUserRound } from 'lucide-react';
function Navbar() {
    const navigate = useNavigate();
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const loginPage = () => {
        navigate("/Login");
    }
    const profile = () => {
        navigate("/profile");
    }


    return (
        <div className={NavbarCSS["navbar"]}>
            <div className={NavbarCSS["website-name"]}>
                <h3 className={NavbarCSS["title"]}>WRITEHAVEN</h3>
            </div>

            <ul className={NavbarCSS["list"]}>
                {!localStorage.getItem("token") ? (
                    <>
                        <li className={NavbarCSS["nav-li"]}>  <Link to="/">HOME</Link></li>
                        <li className={NavbarCSS["nav-li"]}><Link to="/About">ABOUT</Link></li>
                    </>
                ) : (

                    <>
                        <li className={NavbarCSS["nav-li"]}><Link to="/Post">POSTS</Link></li>
                        <li className={NavbarCSS["nav-li"]}>  <Link to="/CreatePost">CREATE</Link></li>
                    </>
                )}


            </ul>



            <div className={NavbarCSS["login-btn-container"]}>
                {localStorage.getItem("token") ? (
                    // <button className={NavbarCSS["login-btn"]} onClick={logout}>Logout</button>
                    <button className={NavbarCSS["profile-btn"]} onClick={profile}><CircleUserRound /></button>
                ) : (
                    <button className={NavbarCSS["login-btn"]} onClick={loginPage}>Login</button>
                )}
            </div>
        </div>
    )
}
export default Navbar;