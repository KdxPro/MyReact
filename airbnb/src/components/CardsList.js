import { Card } from './Card'

import  cardsData  from '../data/cardsData'

export function CardsList() {

    let obj = cardsData.map
    (item =>
    <Card key={item.imgNr} imgNr={item.imgNr} rating={item.rating}
        reviewCount={item.reviewCount} country={item.country}
        title={item.title} price={item.price} openSpots={item.openSpots}
        online={item.online}
    />
    );

    return (
    <main className='cardslist'>
        <div className='cardslist--cards'>
            {obj}
        </div>    
    </main>
    );

}
