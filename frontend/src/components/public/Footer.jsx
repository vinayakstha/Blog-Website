import React from "react";
import FooterCSS from "./Footer.module.css";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";

function Footer() {
    return (
        <footer className={FooterCSS.footer}>
            <div className={FooterCSS.container}>
                <div className={FooterCSS.top}>
                    <div className={FooterCSS.brand}>
                        <span className={FooterCSS.brandName}><h5>WRITEHAVEN</h5></span>
                    </div>

                    <div className={FooterCSS.linkGroups}>
                        <div className={FooterCSS.linkGroup}>
                            <h2>About</h2>
                            <ul>
                                <li><a href="#">Writehaven</a></li>
                                <li><a href="#">Article</a></li>
                            </ul>
                        </div>

                        <div className={FooterCSS.linkGroup}>
                            <h2>Follow Us</h2>
                            <ul>
                                <li><a href="https://github.com/">Github</a></li>
                                <li><a href="https://discord.com/">Discord</a></li>
                            </ul>
                        </div>

                        <div className={FooterCSS.linkGroup}>
                            <h2>Legal</h2>
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms &amp; Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className={FooterCSS.divider} />

                <div className={FooterCSS.bottom}>
                    <span>© 2022 Writehaven</span>
                    <div className={FooterCSS.socialIcons}>
                        <a href="https://facebook.com/" aria-label="Facebook" className={FooterCSS.icon}>
                            <Facebook />
                        </a>
                        <a href="https://instagram.com/" aria-label="Instagram" className={FooterCSS.icon}>
                            <Instagram />
                        </a>
                        <a href="https://twitter.com/" aria-label="Twitter" className={FooterCSS.icon}>
                            <Twitter />
                        </a>
                        <a href="https://github.com/" aria-label="GitHub" className={FooterCSS.icon}>
                            <Github />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
