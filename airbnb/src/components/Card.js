import star_icon from "../images/star_icon.png"

export function Card({imgNr, rating, reviewCount, country, title, price, openSpots, online}) {

  let badgeText;

  if(openSpots === 0)
    badgeText = "SOLD OUT";
  else if(online)
    badgeText = "ONLINE";

  return (
    <div className='card'>
      {openSpots === 0 && <div className="card--badge--red">{badgeText}</div>}
      {online > 0 && <div className="card--badge--blue">{badgeText}</div>}
      <img src={"https://picsum.photos/200/300.jpg?random=" + imgNr} alt="card_image"></img>
      <div className="card--stats">
        <img src={star_icon} alt="star_icon"></img>
        <span>{rating}</span>
        <span>({reviewCount})</span>
        <span>•{country}</span>
      </div>

      <p className="card--title">{title}</p>
      <p className="card--price--p"><span className="card--price">{`From $${price}`}</span>/person</p>
      
    </div>
  );
}
