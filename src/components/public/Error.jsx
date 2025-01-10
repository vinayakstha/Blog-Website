import ErrorCSS from "./Error.module.css";
import { useNavigate } from "react-router-dom";

function Error() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div className={ErrorCSS["error-main-container"]}>
            <div className={ErrorCSS["error-child-container"]}>

            </div>
            <button onClick={goBack}>Go Back</button>
        </div>
    )
}
export default Error;