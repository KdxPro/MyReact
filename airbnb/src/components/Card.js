import star_icon from "../images/star_icon.png"

export function Card(props) {

  let badgeText;

  if(props.openSpots === 0)
    badgeText = "SOLD OUT";
  else if(props.online)
    badgeText = "ONLINE";

  return (
    <div className='card'>
      {props.openSpots === 0 && <div className="card--badge--red">{badgeText}</div>}
      {props.online > 0 && <div className="card--badge--blue">{badgeText}</div>}
      <img src={"https://picsum.photos/200/300.jpg?random=" + props.imgNr} alt="card_image"></img>
      <div className="card--stats">
        <img src={star_icon} alt="star_icon"></img>
        <span>{props.rating}</span>
        <span>({props.reviewCount})</span>
        <span>•{props.country}</span>
      </div>

      <p className="card--title">{props.title}</p>
      <p className="card--price--p"><span className="card--price">{`From $${props.price}`}</span>/person</p>
      
    </div>
  );
}
