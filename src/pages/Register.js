import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { registerInitiate } from "../redux/action";
import "./pages.css";

const Register = () => {
  //   const [state, setState] = useState({
  //     email: "",
  //     password: "",
  //     name: "",
  //     confirmPassword: "",
  //   });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, , setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  //   const { email, password, name, confirmPassword } = state;

  const { currentUSer } = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUSer) {
      history.pushState("/");
    }
  }, [currentUSer, history]);

  //   const handleChange = (e) => {
  //     let { name, value } = e.target;
  //     setState({ ...state, [name]: value });
  //     console.log(setState(), " im log");
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("hello");
    // if (password !== confirmPassword) {
    //   return;
    // }
    dispatch(registerInitiate(email, password, name));
    // setState({
    //   email: "",
    //   password: "",
    //   name: "",
    //   confirmPassword: "",
    // });
  };
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
              onChange={(e) => setEmail(e.target.value)}
              //   onChange={handleChange}
              value={email}
            />
          </div>
          <div>
            <input
              placeholder="name"
              className="inp"
              type="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div>
            <input
              className="inp"
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              value={password}
            />
          </div>
          {/* <div>
            <input
              className="inp"
              placeholder="Confirm password"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="password"
              value={confirmPassword}
            />
          </div> */}
          <div className="btn-login">
            <button className="both" type="submit">
              SignUp
            </button>
          </div>
          <div>
            <Link to="/login">Back to login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
