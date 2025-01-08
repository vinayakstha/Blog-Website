import './App.css';
import Login from './components/public/Login';
import Home from './components/public/Home';
import Error from './components/public/Error';
import Signup from './components/public/Signup';
import Article from './components/public/Article';
import PasswordReset from './components/public/PasswordReset';
import Layout from './components/public/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Suspense fallback={<div>Loading...</div>} /> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Article" element={<Article />} />
        </Route>

        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/PasswordReset" element={<PasswordReset />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
