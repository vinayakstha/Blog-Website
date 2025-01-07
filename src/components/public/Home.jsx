import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import HomeCSS from "./Home.module.css";
function Home() {
    const navigate = useNavigate();
    const signupPage = () => {
        navigate("/Signup");
    }
    return (
        <>
            <Navbar />
            <div className={HomeCSS["content"]}>
                <div className={HomeCSS["main-heading"]}>
                    <h1 className={HomeCSS["title"]}>Write. Publish. Inspire.</h1>
                </div>
                <div className={HomeCSS["paragraph"]}>
                    Become an author.
                </div>
                <div className={HomeCSS["signup-btn-container"]}>
                    <button className={HomeCSS["signup-btn"]} onClick={signupPage}>Signup</button>
                </div>
            </div>
        </>
    )
}
export default Home;