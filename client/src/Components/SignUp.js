import React, { useState } from "react";

function SignUp({ setUser }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [address, setAddress] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        password,
        password_confirmation: passwordConfirmation,
        address,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="login-signup-form-container">
      <input
          className="login-signup-form"
          type="text"
          placeholder="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="login-signup-form"
          type="text"
          placeholder="Username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="login-signup-form"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <input
          className="login-signup-form"
          type="password"
          placeholder="Confirm password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <input
          className="login-signup-form"
          type="text"
          placeholder="Insert your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button className="login-signup-button" type="submit">Sign Up</button>
    </form>
    </div>
  );
}

export default SignUp;