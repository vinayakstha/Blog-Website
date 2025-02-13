import AboutCSS from "./About.module.css";
import { NotebookPen, BookOpenText, UsersRound } from 'lucide-react';
function About() {
    return (
        <div className={AboutCSS["content"]}>
            <div className={AboutCSS["child-content"]}>
                <div className={AboutCSS["home-content"]}>
                    <div className={AboutCSS["main-heading"]}>
                        <h1 className={AboutCSS["title"]}>About Us</h1>
                    </div>
                    <div className={AboutCSS["paragraph"]}>
                        <p className={AboutCSS["description"]}>
                            Welcome to Writehaven, your go-to platform for discovering and sharing insightful articles on a wide range of topics.
                            Whether you're a writer or reader, join us to explore ideas and meaningful discussions.
                        </p>
                    </div>
                </div>
                <div className={AboutCSS["home-image"]}>
                    <div className={AboutCSS["home-image-container"]}></div>
                </div>
            </div>

            <div className={AboutCSS["mission"]}>
                <div className={AboutCSS["heading"]}>
                    <h3>Our mission</h3>
                </div>
                <div className={AboutCSS["three-divs"]}>
                    <div className={AboutCSS["three-divs-child"]}>
                        <div className={AboutCSS["icons"]}>
                            <NotebookPen />
                        </div>
                        <div className={AboutCSS["three-divs-heading"]}>
                            <h5>Empower Writers</h5>
                        </div>
                        <div className={AboutCSS["three-divs-paragraph-container"]}>
                            <p className={AboutCSS["three-divs-paragraph"]}>
                                Provide a platform for writers to share their knowledge, creativity, and perspectives.
                            </p>
                        </div>
                    </div>

                    <div className={AboutCSS["three-divs-child"]}>
                        <div className={AboutCSS["icons"]}>
                            <BookOpenText />
                        </div>
                        <div className={AboutCSS["three-divs-heading"]}>
                            <h5>Inspire Readers</h5>
                        </div>
                        <div className={AboutCSS["three-divs-paragraph-container"]}>
                            <p className={AboutCSS["three-divs-paragraph"]}>
                                Deliver diverse, high-quality content that educates, informs, and sparks discussions.
                            </p>
                        </div>
                    </div>

                    <div className={AboutCSS["three-divs-child"]}>
                        <div className={AboutCSS["icons"]}>
                            <UsersRound />
                        </div>
                        <div className={AboutCSS["three-divs-heading"]}>
                            <h5>Build a community</h5>
                        </div>
                        <div className={AboutCSS["three-divs-paragraph-container"]}>
                            <p className={AboutCSS["three-divs-paragraph"]}>
                                Foster an engaging space where readers and writers connect, learn, and grow together.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;