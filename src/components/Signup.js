import React from "react";
import { useHistory } from "react-router-dom";
import { URL } from "./App"

export default function Signup({ onLogin }) {
  let history = useHistory();

  const handleSignup = async (e) => {
    e.preventDefault();
    let form = new FormData(document.querySelector(`#signup-form`));
    let req = await fetch(`${URL}/signup`, {
      method: `POST`,
      body: form,
    });
    let user = await req.json();
    onLogin(user);
    history.push(`/me`);
  };

  return (
    <div className="login">
      <h2 className="modal-title">Welcome.</h2>
      <form
        className="form sign-up-form"
        id="signup-form"
        onSubmit={handleSignup}
      >
        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="Full Name"
            id="name"
            name="name"
          />
          <label for="name" className="form__label">
            Full name
          </label>
        </div>

        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="Username"
            id="username"
            name="username"
          />
          <label for="username" className="form__label">
            Username
          </label>
        </div>

        <div className="form__group">
          <input
            type="email"
            className="form__input"
            placeholder="Email"
            id="email"
            name="email"
          />
          <label for="email" className="form__label">
            Email
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
          <input
            type="text"
            className="form__input"
            placeholder="Image URL"
            id="image_url"
            name="image_url"
          />
          <label for="image_url" class="form__label">
            Image URL
          </label>
        </div>

        <div className="form__group">
          <input
            type="password"
            className="form__input"
            placeholder="Confirm password"
            id="confirmed-password"
            name="confirmed-password"
          />
          <label for="confirmed-password" class="form__label">
            Confirm password
          </label>
        </div>

        <div className="form__group">
          <button className="form__btn-text" id="add_new_btn">
            Sign up &rarr;
          </button>
        </div>
      </form>
    </div>
  );
}
