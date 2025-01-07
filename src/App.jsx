import './App.css';
import Login from './components/public/Login';
import Home from './components/public/Home';
import Error from './components/public/Error';
import Signup from './components/public/Signup';
import PasswordReset from './components/public/PasswordReset';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Suspense fallback={<div>Loading...</div>} /> */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/PasswordReset" element={<PasswordReset />} />
        {/* <Route path="/Blog" element={<Blog />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
