import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    const signupPage = () => {
        navigate("/Signup");
    }
    return (
        <div className="content">
            <div className="main-heading">
                <h1 className="title">Write. Publish. Inspire.</h1>
            </div>
            <div className="paragraph">
                Become an author.
            </div>
            <div className="signup-btn-container">
                <button className="signup-btn" onClick={signupPage}>Signup</button>
            </div>
        </div>
    )
}
export default Home;