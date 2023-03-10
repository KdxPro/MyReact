import star_icon from "../images/star_icon.png"

export function Card() {

  const firstname = "Joe";
  const lastname = "Schmoe";

  return (
    <div className='card'>
      <img src="https://picsum.photos/200/300.jpg?random=100" alt="card_image"></img>
      <div className="card--stats">
        <img src={star_icon} alt="star_icon"></img>
        <span>5.0</span>
        <span>(6)</span>
        <span>•USA</span>
      </div>

      <p>Life Lessons with Katie Zofenes</p>
      <p><span className="card--price">From $136</span>/person</p>

      <p>Hello {firstname + " " + lastname} {lastname}</p>
      
    </div>
  );
}
