import FooterCSS from "./Footer.module.css";
import { Facebook, Instagram } from "lucide-react";

function Footer() {
    return (
        <footer className={FooterCSS["footer"]}>
            <div className={FooterCSS["container"]}>
                <p className={FooterCSS["text"]}>© {new Date().getFullYear()} vinayakstha. All rights reserved.</p>
                <div className={FooterCSS["links"]}>
                    <p className={FooterCSS["footer-text"]}>Contact Us</p>
                </div>
                <div className={FooterCSS["icons"]}>
                    <a href="http://facebook.com"><Facebook /></a>
                    <a href="http://instagram.com"><Instagram /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;