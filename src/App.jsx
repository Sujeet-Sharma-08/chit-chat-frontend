import React, { Suspense } from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./components/layout/Navbar";

// Lazy-loaded components
const Login = React.lazy(() => import("./components/pages/Login"));
const Signup = React.lazy(() => import("./components/pages/Signup"));
const Home = React.lazy(() => import("./components/home/Home"));

// Non-lazy-loaded component
import ChatPage from "./components/pages/ChatPage";



function App() {
  // Accessing the token to implement protected routes
  const { token } = useSelector((state) => state.auth);

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />

        {/* Chat Page Route */}
        <Route
          path="/chatpage"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {token ? <ChatPage /> : <Login />}
            </Suspense>
          }
        />

        {/* Login Route */}
        <Route
          path="/login"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {token ? <ChatPage /> : <Login />}
            </Suspense>
          }
        />

        {/* Signup Route */}
        <Route
          path="/signup"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Signup />
            </Suspense>
          }
        />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
