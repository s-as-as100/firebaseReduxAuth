import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./pages.css";
const Register = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    name:"",
    confirmPassword:""
  });
  const { email, password,name , confirmPassword} = state;
 
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
              placeholder="name"
              className="inp"
              type="name"
              name="name"
              onChange={handleChange}
              value={name}
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
          <div>
            <input
              className="inp"
              placeholder="Confirm password"
              type="password"
              onChange={handleChange}
              name="password"
              value={confirmPassword}
            />
          </div>
          <div className="btn-login">
            <button className="both" type="submit">
              SignUp
            </button>
          </div>
          <div>
              <Link to="/">Back to login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
