import { Link } from "react-router-dom";
import PasswordResetCSS from "./PasswordReset.module.css";
function PasswordReset() {
    return (
        <div className={PasswordResetCSS["password-reset-form"]}>
            <div className={PasswordResetCSS["password-reset-form-child"]}>
                <div className={PasswordResetCSS["password-reset-form-image"]}>
                </div>
                <div className={PasswordResetCSS["password-reset-form-content"]}>
                    <h2>Change Password</h2>
                    <form action="#">
                        <div className={PasswordResetCSS["password-reset-input-field"]}>
                            <input type="text" placeholder="Email" required />
                        </div>
                        <div className={PasswordResetCSS["password-reset-input-field"]}>
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div className={PasswordResetCSS["password-reset-input-field"]}>
                            <input type="password" placeholder="Confirm Password" required />
                        </div>
                        <button type="submit" className={PasswordResetCSS["password-reset-button"]}>Confirm</button>
                    </form>
                    <div className={PasswordResetCSS["password-reset-bottom-link"]}>
                        Remember your password?
                        <Link to="/Login"> Login</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PasswordReset;