import headerImage from "../images/world_icon.png"

export function Header() {
  return (
    <header>
      <img className='header--icon' src={headerImage} alt='header_icon'></img>
      <span className='header--title'>my travel jurnal.</span>
    </header>
  );
}
