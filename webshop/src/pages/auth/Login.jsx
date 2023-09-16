import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../store/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { setLoggedIn } = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCkkAZxRGlMbwHCjXtjIeR7OjIuoDa1Ej0";

  const login = () => {
    const body = {
      // https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
      email: emailRef.current.value,
      password: passwordRef.current.value,
      returnSecureToken: true,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    fetch(url, { method: "POST", body: JSON.stringify(body), headers: headers })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        if (json.error === undefined) {
          setLoggedIn(true);
          // setMessage("");
          navigate("/admin");
          sessionStorage.setItem("token", json.idToken)
        } else {
          setMessage(json.error.message);
        }
      });
  };

  return (
    <div>
      {message} <br />
      <label htmlFor="">Email</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <label htmlFor="">Parool</label> <br />
      <input ref={passwordRef} type="password" /> <br /> <br />
      <button onClick={login}>Logi sisse</button>
    </div>
  );
}

export default Login;
