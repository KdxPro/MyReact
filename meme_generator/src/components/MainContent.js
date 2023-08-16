import React from "react";

import { Boxes } from "./Boxes";
import { Star } from "./Star";
import { TopText } from "./TopText";
import { BottomText } from "./BottomText";

export function MainContent(props) {
  const [randVal, setRandVal] = React.useState(0);
  function handleOnClick(e) {
    e.preventDefault();

    setFavIcon(false);
    setRandVal(Math.floor(Math.random() * 255));
  }

  const [isFavIcon, setFavIcon] = React.useState(false);
  function handleOnClickFavIcon() {
    setFavIcon((prevFavIcon) => !prevFavIcon);
  }

  const [form, setForm] = React.useState({
    topText: "",
    bottomText: "",
    isGood: true,
    employment: "",
  });
  function handleFormChange(event) {
    const { name, value, type, checked } = event.target;
    setForm((prevForm) => {
      return { ...prevForm, [name]: type === "checkbox" ? checked : value };
    });
  }

  return (
    <main>
      <form className="main--form">
        <input
          className="main--input"
          placeholder="Top text"
          onChange={handleFormChange}
          name="topText"
          value={form.topText}
        ></input>
        <input
          className="main--input"
          placeholder="Bottom text"
          onChange={handleFormChange}
          name="bottomText"
          value={form.bottomText}
        ></input>
        <button className="main--button" onClick={handleOnClick}>
          Get a new {props.item} image
        </button>
      </form>

      <div className="main--imageContainer">
        <img
          className="imageContainer--image"
          src={"https://picsum.photos/600/400?random=" + randVal}
          alt="main_image"
        />
        <TopText text={form.topText} />
        <BottomText text={form.bottomText} />
        <Star isFavIcon={isFavIcon} onClickHandle={handleOnClickFavIcon} />
        <Boxes quantity={5} />
      </div>
      <div
        className="main--isGoodContainer"
        id={
          form.isGood
            ? "main--isGoodContainer_green"
            : "main--isGoodContainer_red"
        }
      >
        <input
          type="checkbox"
          className="main--isGood"
          checked={form.isGood}
          onChange={handleFormChange}
          name="isGood"
        />
        <label htmlFor="isGood">
          Is this App good? {form.isGood ? ":)" : ":("}
        </label>
      </div>
      <div className="main--radioContainer">
        <legend>Current employment status</legend>
        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          checked={form.employment === "unemployed"}
          onChange={handleFormChange}
        ></input>
        <label htmlFor="radioButton">Unemployed</label>
        <br />
        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          checked={form.employment === "part-time"}
          onChange={handleFormChange}
        ></input>
        <label htmlFor="radioButton">Part-time</label>
        <br />
        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          checked={form.employment === "full-time"}
          onChange={handleFormChange}
        ></input>
        <label htmlFor="radioButton">Full-time</label>
        <br />
      </div>
    </main>
  );
}
