import './App.css';

import { Header } from './components/Header';
import { About } from './components/About';
import { Interests } from './components/Interests';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className='app'>

      <Header/>
      <About/>
      <Interests/>
      <Footer/>

    </main>
  );
}

export default App;
