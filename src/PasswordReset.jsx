import { Link } from "react-router-dom";
function PasswordReset() {
    return (
        <div className="passwordResetForm">
            <div className="passwordResetFormChild">
                <div className="passwordResetFormImage">
                </div>
                <div className="passwordResetFormContent">
                    <h2>Change Password</h2>
                    <form action="#">
                        <div className="passwordResetInputField">
                            <input type="text" placeholder="Email" required />
                        </div>
                        <div className="passwordResetInputField">
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div className="passwordResetInputField">
                            <input type="password" placeholder="Confirm Password" required />
                        </div>
                        <button type="submit" className="passwordResetButton">Confirm</button>
                    </form>
                    <div className="passwordResetBottomLink">
                        Remember your password?
                        <Link to="/Login"> Login</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PasswordReset;