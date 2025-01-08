import FooterCSS from "./Footer.module.css";

function Footer() {
    return (
        <footer className={FooterCSS["footer"]}>
            <div className={FooterCSS["container"]}>
                <p className={FooterCSS["text"]}>© {new Date().getFullYear()} vinayakstha. All rights reserved.</p>
                <div className={FooterCSS["links"]}>
                    <a href="/privacy" className={FooterCSS["link"]}>Privacy Policy</a>
                    <a href="/terms" className={FooterCSS["link"]}>Terms of Service</a>
                    <a href="/contact" className={FooterCSS["link"]}>Contact Us</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;