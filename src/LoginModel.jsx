
import { X } from 'lucide-react';
function LoginModel() {

    return (
        <div className="loginPopUp">
            <div className="exitButton">
                <button><X /></button>
            </div>
            <div>
                <h2>LOGIN</h2>
                <form action="" className="loginForm">
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}
export default LoginModel;