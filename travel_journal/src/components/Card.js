import pinImage from '../images/pin_icon.png';

export function Card(props) {

  let countryLowerCase = props.country[0].toLowerCase() + props.country.slice(1);

  return (
    <div className='card'>
      <img className='card--img' src={'https://picsum.photos/200/300?random='+props.id} alt='card_img'></img>
      <div className='card--content'>
        <section className='card--location'>
          <img className='card--pin_icon' src={pinImage} alt='card_pin_icon'></img>
          <span className='card--country'>{props.country}</span>
          <a className='card--google_map_link' href={'https://www.google.de/maps/place/' + props.country}>{'google_map_'+countryLowerCase}</a>
        </section>
        <h1 className='card--title'>{props.title}</h1>
        <h4 className='card--date'>{props.date}</h4>
        <p className='card--about'>{props.about}</p>
      </div>
    </div>
  );
}