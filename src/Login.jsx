import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="loginForm">
            <div className="loginFormChild">
                <div className="loginFormImage">
                </div>
                <div className="loginFormContent">
                    <h2>LOGIN</h2>
                    <form action="#">
                        <div className="inputField">
                            <input type="text" placeholder="Email" required />
                        </div>
                        <div className="inputField" id="loginPagePassword">
                            <input className="loginPagePaswordInput" type="password" placeholder="Password" required />
                        </div>
                        <Link to="/PasswordReset" className="forgotPassword">Forgot password?</Link>
                        <button type="submit" className="loginButton">Login</button>
                    </form>
                    <div className="bottomLink">
                        Don't have an account?
                        <Link to="/Signup"> Sign up</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Login;