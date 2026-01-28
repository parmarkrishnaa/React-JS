import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/config.js";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("isLoggedIn", true);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignup = () => {
    navigate("/signUp");
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      localStorage.setItem("isLoggedIn", true);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Login</h2>

          <form onSubmit={handleLogin}>
            <input
              className="form-control mb-2"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="form-control mb-2"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary w-100 mb-2">Login</button>
          </form>

          <button className="btn btn-danger w-100" onClick={handleGoogleLogin}>
            Sign in with Google
          </button>

          <button className="btn btn-warning w-100 mt-2" onClick={handleSignup}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
