import { useNavigate, Link } from "react-router-dom";
import NavbarCSS from "./Navbar.module.css";
import { Link as ScrollLink } from "react-scroll";
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
                        <li className={NavbarCSS["nav-li"]}>
                            <ScrollLink to="home-section" smooth={true} duration={500} offset={-60} className={NavbarCSS["scroll-link"]}>
                                HOME
                            </ScrollLink>
                        </li>
                        <li className={NavbarCSS["nav-li"]}>
                            <ScrollLink to="about-section" smooth={true} duration={500} offset={-60} className={NavbarCSS["scroll-link"]}>
                                ABOUT
                            </ScrollLink>
                        </li>
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