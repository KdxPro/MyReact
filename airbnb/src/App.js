import './App.css';

import { Header } from './components/Header';
import { Heroes } from './components/Heroes';
import { Card } from './components/Card'

import  cardsData  from './data/cardsData'


function App() {

  let obj = cardsData.map(item =>
      <Card
      imgNr={item.imgNr} rating={item.rating}
      reviewCount={item.reviewCount} country={item.country}
      title={item.title} price={item.price}/>
      );

  return (
    <main className="app">
      <Header/> 
      <Heroes/>
      {obj}
    </main>
  );
}

export default App;
