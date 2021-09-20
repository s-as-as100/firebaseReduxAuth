import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./pages.css";
const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;

  const handleGoogleSignIn = () => {};
  const handleFBSignIn = () => {};
  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <div className=" container">
      <div className="login">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              placeholder="email"
              className="inp"
              type="email"
              name="email"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div>
            <input
              className="inp"
              placeholder="password"
              type="password"
              onChange={handleChange}
              name="password"
              value={password}
            />
          </div>
          <div className="btn-login">
            <button className="both" type="submit">
              Login
            </button>
          </div>
          <div className="fb-google">
            <button className="both" onClick={handleGoogleSignIn}>
              GoogleSign
            </button>
            <button
              className="both"
              style={{
                marginLeft: "8px",
              }}
              onClick={handleFBSignIn}
            >
              {" "}
              FacebookSign
            </button>
          </div>

          <div>
            <p>
              If you dont have account register please!
              <Link to="/register" >Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
