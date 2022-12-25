import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorpass, setErrorpass] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  let navigate = useNavigate();

  const nextpage = () => {
    navigate("/signup");
  };

  const validationname = () => {
    if (name === "") {
      setError("Please enter username");
    }
  };

  const validationboth = () => {
    if (password === "") {
      setErrorpass("Please enter password");
    }
    if (name === "" && password === "") {
      setError("Please enter username");
      setErrorpass("Please enter password");
    }
  };

  const userlogin = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          password: password,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setPassword("");
        navigate("/home");
      } else {
        console.log("Error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <div className="rectangle"></div>
      <div className="details">
        <div className="head">
          <div className="circle"></div>
          <div className="text">
            <h1>APP NAME</h1>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <p className="linetwo"> adipisicing elit.</p>
          </div>
        </div>
        <form onSubmit={userlogin}>
          <input
            type="text"
            placeholder="Username"
            id="name"
            onBlur={(event) => setName(event.target.value)}
          />
          <p className="errors">{error}</p>
          <br />
          <input
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
            id="id_password"
            onBlur={(event) => setPassword(event.target.value)}
            onClick={validationname}
          />
          <i
            className="far fa-eye-slash"
            id="togglePassword"
            style={{ margin: "-30px", color: "#1fc3c0" }}
            onClick={togglePassword}
          ></i>
          <p className="errors">{errorpass}</p>

          <br />
          <button type="submit" onClick={validationboth}>
            Login
          </button>
        </form>
        <div className="bottom">
          <p className="statement">
            Dont have an account?{" "}
            <span style={{ color: "#1fc3c0" }} onClick={nextpage}>
              Signup
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
