import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./NavBar";

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
export default Layout;