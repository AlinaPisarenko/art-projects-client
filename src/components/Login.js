import React from "react";
import { useHistory } from "react-router-dom";
import { URL } from "./App"

export default function Login({ onLogin }) {
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    let form = new FormData(document.querySelector(`#signup-form`));

    let response = await fetch(`${URL}/login`, {
      method: `POST`,
      body: form,
    });

    if (response.ok) {
      let user = await response.json();
      history.push("/me");
      onLogin(user);
    } else {
      response.json().then((err) => console.log(err.errors));
    }
  };

  return (
    <div className="login">
      <form className="form" id="signup-form" onSubmit={handleLogin}>
        <h2 className="modal-title">Welcome back.</h2>
        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="Username"
            required
            id="name"
            name="username"
          />
          <label for="name" class="form__label">
            Username
          </label>
        </div>
        <div className="form__group">
          <input
            type="password"
            className="form__input"
            placeholder="Password"
            id="password"
            name="password"
          />
          <label for="password" className="form__label">
            Password
          </label>
        </div>

        <div className="form__group">
          <button className="form__btn-text">Log in &rarr;</button>
        </div>
      </form>
    </div>
  );
}
