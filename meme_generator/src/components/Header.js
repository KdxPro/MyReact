import memeIcon from "../images/meme_icon.png";

export default Header;

export function Header(props) {
  return (
    <header>
      <span className="header--logo_container">
        <img className="header--image" src={memeIcon} alt="header_image"></img>
        <h2 className="header--title">{props.item} Generator</h2>
      </span>

      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}
