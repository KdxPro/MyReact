import './App.css';

import { Header } from './components/Header';
import { Heroes } from './components/Heroes';
import { Card } from './components/Card'

function App() {

  return (
    <main className="app">
      <Header/>
      <Heroes/>
      <Card/>
    </main>
  );
}

export default App;
