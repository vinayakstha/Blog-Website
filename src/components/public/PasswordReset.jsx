import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import PasswordResetCSS from "./PasswordReset.module.css";

function PasswordReset() {
    const navigate = useNavigate();
    return (
        <div className={PasswordResetCSS["password-reset-form"]}>
            <div className={PasswordResetCSS["password-reset-form-child"]}>
                <div className={PasswordResetCSS["password-reset-form-image"]}>
                </div>
                <div className={PasswordResetCSS["password-reset-form-content"]}>
                    <div className={PasswordResetCSS["exit-button-container"]}>
                        <button onClick={() => navigate(-1)}>
                            <X />
                        </button>
                    </div>
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