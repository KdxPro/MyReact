import React from "react";

import { Boxes } from "./Boxes";
import { Star } from "./Star";
import { TopText } from "./TopText";
import { BottomText } from "./BottomText";
import { TestForm } from "./TestForm";
import { SignUpForm } from "./SignUpForm";

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
    favColor: "",
  });

  function handleFormChange(event) {
    const { name, value, type, checked } = event.target;
    setForm((prevForm) => {
      return { ...prevForm, [name]: type === "checkbox" ? checked : value };
    });
  }

  const [allMemes, setAllMemes] = React.useState([]);
  React.useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  console.log(allMemes);

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
      <TestForm form={form} onFormChange={handleFormChange} />
      <SignUpForm />
    </main>
  );
}
