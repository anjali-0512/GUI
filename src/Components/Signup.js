import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router";

export default function Signup() {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconf, setPasswordconf] = useState("");
  const [error, setError] = useState("");
  const [errorname, setErrorname] = useState("");
  const [erroremail, setErroremail] = useState("");
  const [errorpass, setErrorpass] = useState("");
  const [errorpassconf, setErrorpassconf] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShownConf, setPasswordShownConf] = useState(false);
  const [message, setMessage] = useState("");

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const togglePasswordConf = () => {
    setPasswordShownConf(!passwordShownConf);
  };

  let navigate = useNavigate();

  const nextpage = () => {
    navigate("/");
  };
  const validationuser = () => {
    if (user === "") {
      setError("Please enter username");
    }
  };

  const validationname = () => {
    if (name === "") {
      setErrorname("Please enter fullname");
    }
  };

  const validationemail = () => {
    if (email === "") {
      setErroremail("Please enter email");
    } else {
      const valid = /\S+@\S+\.\S+/.test(email);
      console.log(valid);
      if (!valid) {
        setErroremail("Please enter valid email");
      }
    }
  };

  const validationpassword = () => {
    if (password === "") {
      setErrorpass("Please enter password");
    }
  };

  const validationall = () => {
    if (passwordconf === "") {
      setErrorpassconf("Please re-enter the password to confirm");
    }

    if (
      user === "" &&
      name === "" &&
      email === "" &&
      password === "" &&
      passwordconf === ""
    ) {
      setError("Please enter username");
      setErrorname("Please enter fullname");
      setErroremail("Please enter email");
      setErrorpass("Please enter password");
      setErrorpassconf("Please re-enter the password to confirm");
    }

    if (password !== passwordconf) {
      setErrorpassconf("Password not matching");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user,
          fullname: name,
          email: email,
          password: password,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            onBlur={(event) => setUser(event.target.value)}
          />
          <p className="errors">{error}</p>
          <br />
          <input
            type="text"
            placeholder="Fullname"
            onBlur={(event) => setName(event.target.value)}
            onClick={validationuser}
          />
          <p className="errors">{errorname}</p>
          <br />
          <input
            type="email"
            placeholder="Email"
            onBlur={(event) => setEmail(event.target.value)}
            onClick={validationname}
          />
          <p className="errors">{erroremail}</p>

          <br />
          <input
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
            id="id_password"
            onBlur={(event) => setPassword(event.target.value)}
            onClick={validationemail}
          />
          <i
            className="far fa-eye-slash"
            id="togglePassword"
            style={{ margin: "-30px", color: "#1fc3c0" }}
            onClick={togglePassword}
          ></i>
          <p className="errors">{errorpass}</p>

          <br />
          <input
            type={passwordShownConf ? "text" : "password"}
            placeholder="Confirm Password"
            id="password_confirm"
            onBlur={(event) => setPasswordconf(event.target.value)}
            onClick={validationpassword}
          />
          <i
            className="far fa-eye-slash"
            id="togglePasswordConfirm"
            style={{ margin: "-30px", color: "#1fc3c0" }}
            onClick={togglePasswordConf}
          ></i>
          <p className="errors">{errorpassconf}</p>

          <br />
          <button type="submit" onClick={validationall}>
            Register
          </button>
        </form>
        <div className="bottom">
          <p className="statement">
            Already have an account?
            <span style={{ color: "#1fc3c0" }} onClick={nextpage}>
              Login
            </span>
          </p>
          <div className="message">{message}</div>
        </div>
      </div>
    </div>
  );
}
