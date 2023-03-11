
export function Heros(props) {
  return (

    <img
      className={"heros_nr_" + props.nr}
      src={"https://picsum.photos/200/300.jpg?random=" + props.nr}
      alt={"heros_nr_" + props.nr + "_picture"}
      key={props.nr}
    >
    </img>

  );
}
