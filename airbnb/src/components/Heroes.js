import { HeroesGrid } from "./HeroesGrid";

export function Heroes() {

  return (
    <main className="heroes">
      <HeroesGrid maxHeight={5} maxWidth={12} maxDev={200}/>
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
