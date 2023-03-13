import { Card } from './Card'

import cardsData from '../data/cardsData';

export function MainContent() {

  let obj = cardsData.map(item => <Card key={item.key} {...item}/>);

  return(
    <main>
      {obj}
    </main>
  );
}
