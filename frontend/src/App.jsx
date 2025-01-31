import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Login = lazy(() => import('./components/public/Login'));
const Home = lazy(() => import('./components/public/Home'));
const Error = lazy(() => import('./components/public/Error'));
const Signup = lazy(() => import('./components/public/Signup'));
const Post = lazy(() => import('./components/public/Post'));
const PasswordReset = lazy(() => import('./components/public/PasswordReset'));
const Layout = lazy(() => import('./components/public/Layout'));
const CreatePost = lazy(() => import('./components/private/CreatePost'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Post" element={<Post />} />
            <Route path="CreatePost" element={<CreatePost />} />
          </Route>
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="PasswordReset" element={<PasswordReset />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;