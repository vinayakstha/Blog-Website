function LandingPage() {
    return (
        <div className="main-container">
            <div className="navbar">
                <div className="website-name">
                    <h3 className="title">WRITEHAVEN</h3>
                </div>

                <ul className="list">
                    <li className="nav-li">  <a href="#">HOME</a></li>
                    <li className="nav-li"><a href="#">BLOGS</a></li>

                    {/* <li className="nav-li"><a href="#">AUTHORS</a></li> */}
                </ul>



                <div className="login-btn-container">
                    <button className="login-btn">Login</button>
                </div>
            </div>
            <div className="content">
                <div className="main-heading">
                    <h1 className="title">Write. Publish. Inspire.</h1>
                </div>
                <div className="paragraph">
                    Become an author.
                </div>
                <div className="signup-btn-container">
                    <button className="signup-btn">Signup</button>
                </div>
            </div>
            <div className="blog-content">

            </div>
        </div>
    );
}
export default LandingPage;