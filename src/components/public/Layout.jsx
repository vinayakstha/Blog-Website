import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
export default Layout;