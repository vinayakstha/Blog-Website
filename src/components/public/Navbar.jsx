import { useNavigate, Link } from "react-router-dom";
import NavbarCSS from "./Navbar.module.css";

function Navbar() {
    const navigate = useNavigate();
    const loginPage = () => {
        navigate("/Login")
    }

    return (
        <div className={NavbarCSS["navbar"]}>
            <div className={NavbarCSS["website-name"]}>
                <h3 className={NavbarCSS["title"]}>WRITEHAVEN</h3>
            </div>

            <ul className={NavbarCSS["list"]}>
                <li className={NavbarCSS["nav-li"]}>  <Link to="/">HOME</Link></li>
                <li className={NavbarCSS["nav-li"]}><Link to="/Post">POSTS</Link></li>

                {/* <li className="nav-li"><a href="#">AUTHORS</a></li> */}
            </ul>



            <div className={NavbarCSS["login-btn-container"]}>
                <button className={NavbarCSS["login-btn"]} onClick={loginPage}>Login</button>
            </div>
        </div>
    )
}
export default Navbar;