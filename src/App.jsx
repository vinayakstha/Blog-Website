import NavBar from "./NavBar";
import Home from "./Home";
import Blog from "./Blog";
import Error from "./Error";
import Login from "./Login";
import { Route, Routes } from "react-router-dom"
import Signup from "./Signup";
import LoginModel from "./LoginModel";
function App() {
  return (
    <>
      <div className="main-container">
        <NavBar />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}
export default App;