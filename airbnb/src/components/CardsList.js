import { Card } from './Card'

import  cardsData  from '../data/cardsData'

export function CardsList() {

    let obj = cardsData.map
    (item =>
        <Card key={item.imgNr} {...item}/>
    );

    return (
        <main className='cardslist'>
            <div className='cardslist--cards'>
                {obj}
            </div>    
        </main>
    );

}
