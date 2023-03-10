function Heros(props) {
  return(

    <img
      className={"heros_nr_" + props.nr}
      src={"https://picsum.photos/200/300.jpg?random=" + props.nr}
      alt={"heros_nr_" + props.nr + "_picture"} 
      >
    </img>

  );
}


export function Heroes() {

  var objArray = Array(6);

  for(let i = 0; i < objArray.length; i++)
  {
    objArray[i] = <Heros nr={i}></Heros>;
  }

  return (
    <main className="heroes">
      <structure>{objArray}</structure>
      <h1>Online Experiences</h1>
      <p>
        Lorem Ipsum is simply dummy text
        of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s
      </p>
    </main>
  );
}
