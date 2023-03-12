import './App.css';

import { Header } from './components/Header';
import { Heroes } from './components/Heroes';
import { CardsList } from './components/CardsList'

function App() {



  return (
    <main className="app">
      <Header/> 
      <Heroes/>
      <CardsList/>
    </main>
  );
}

export default App;
