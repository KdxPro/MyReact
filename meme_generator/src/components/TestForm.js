import React from "react";
import "./TestForm.css";

export function TestForm(props) {
  function handleSubmit(e) {
    e.preventDefault();
    //submitToApi(form);
    console.log(props.form);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form--radioContainer">
        <legend>Current employment status:</legend>
        <div className="input_label">
          <input
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            checked={props.form.employment === "unemployed"}
            onChange={props.onFormChange}
          ></input>
          <label htmlFor="radioButton">Unemployed</label>
        </div>
        <div className="input_label">
          <input
            type="radio"
            id="part-time"
            name="employment"
            value="part-time"
            checked={props.form.employment === "part-time"}
            onChange={props.onFormChange}
          ></input>
          <label htmlFor="radioButton">Part-time</label>
        </div>
        <div className="input_label">
          <input
            type="radio"
            id="full-time"
            name="employment"
            value="full-time"
            checked={props.form.employment === "full-time"}
            onChange={props.onFormChange}
          ></input>
          <label htmlFor="radioButton">Full-time</label>
        </div>
      </div>
      <div className="form--favColor">
        <select
          id="favColor"
          value={props.form.favColor}
          onChange={props.onFormChange}
          name="favColor"
        >
          <option value="choose">--Choose--</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="White">White</option>
        </select>
      </div>
      <div className="form--submit">
        <button>Submit</button>
      </div>
    </form>
  );
}
