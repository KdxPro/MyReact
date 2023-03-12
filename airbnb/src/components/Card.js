import star_icon from "../images/star_icon.png"

export function Card({imgNr, rating, reviewCount, country, title, price}) {

  const firstname = "Joe";
  const lastname = "Schmoe";

  return (
    <div className='card'>
      <img src={"https://picsum.photos/200/300.jpg?random=" + imgNr} alt="card_image"></img>
      <div className="card--stats">
        <img src={star_icon} alt="star_icon"></img>
        <span>{rating}</span>
        <span>({reviewCount})</span>
        <span>•{country}</span>
      </div>

      <p>{title}</p>
      <p><span className="card--price">{`From $${price}`}</span>/person</p>

      <p>Hello {firstname + " " + lastname} {lastname}</p>
      
    </div>
  );
}
