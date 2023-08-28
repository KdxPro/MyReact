import React from "react";
import "./SignUpForm.css";

export function SignUpForm(props) {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    joinNewsletter: true,
  });

  function handleFormChange(event) {
    const { name, value, type, checked } = event.target;
    setForm((prevForm) => {
      return { ...prevForm, [name]: type === "checkbox" ? checked : value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(props.form);
  }

  return (
    <form onSubmit={handleSubmit} className="signUpForm">
      <input
        className="signUpForm--email"
        placeholder="Email"
        onChange={handleFormChange}
        name="email"
        value={form.email}
      ></input>
      <input
        type="password"
        className="signUpForm--password"
        placeholder="Password"
        onChange={handleFormChange}
        name="password"
        value={form.password}
      ></input>
      <input
        className="signUpForm--confirmPassword"
        placeholder="Confirm Password"
        onChange={handleFormChange}
        name="confirmPassword"
        value={form.confirmPassword}
      ></input>
      <div className="signUpForm--JoinNewsletterContainer">
        <input
          type="checkbox"
          className="signUpForm--joinNewsletter"
          checked={form.joinNewsletter}
          onChange={handleFormChange}
          name="joinNewsletter"
        />
        <label htmlFor="JoinNewsletter">I want to join the newsletter</label>
      </div>

      <div className="signUpForm--submit">
        <button>Submit</button>
      </div>
    </form>
  );
}
