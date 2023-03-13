import './App.css';

import { Header } from './components/Header';
import { Heroes } from './components/Heroes';
import { CardsList } from './components/CardsList'
import { Footer } from './components/Footer'

function App() {

  return (
    <main className="app">
      <Header/> 
      <Heroes/>
      <CardsList/>
      <Footer/>
    </main>
  );
}

export default App;
