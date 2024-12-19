import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();
    const loginPage = () => {
        navigate("/Login")
    }

    return (
        <div className="navbar">
            <div className="website-name">
                <h3 className="title">WRITEHAVEN</h3>
            </div>

            <ul className="list">
                <li className="nav-li">  <Link to="/">HOME</Link></li>
                <li className="nav-li"><Link to="/Blog">BLOGS</Link></li>

                {/* <li className="nav-li"><a href="#">AUTHORS</a></li> */}
            </ul>



            <div className="login-btn-container">
                <button className="login-btn" onClick={loginPage}>Login</button>
            </div>
        </div>
    )
}
export default NavBar;