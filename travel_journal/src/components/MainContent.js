import { Card } from './Card'

import cardsData from '../data/cardsData';

export function MainContent() {

  let obj = cardsData.map(item => <Card key={item.id} {...item}/>);

  return(
    <main>
      <div className='main--cards_data'>
        {obj}
      </div>
    </main>
  );
}
