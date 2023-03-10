import './App.css';

import { Header } from './components/Header';
import { Heroes } from './components/Heroes';
import { Card } from './components/Card'

function Test() {

  const maxHeight = 5;
  const maxWidth = 10;

  let objArrayVer = new Array(maxHeight);
  let objArrayHor = new Array(maxWidth);
  let objHor;

  <div className='rect' style={{ 'margin-top': '20px' }}></div>

  let nrOfRectVer = 0;

  let i = 0, i2 = 0;
  for (i = 0; i < objArrayHor.length; i++)
  {
    objArrayVer = new Array(3);

    if(i < maxHeight) nrOfRectVer = i+1;
    else if (i > objArrayHor.length - maxHeight) nrOfRectVer = objArrayHor.length - i;

    let randVal = Math.floor(Math.random() * 100-50);

    for (i2 = 0; i2 < nrOfRectVer; i2++)
      objArrayVer[i2] = <div className='rect'></div>;

    objArrayHor[i] = <div className='rectVer' style={{'margin-top': randVal + 'px'}}>{objArrayVer}</div>;

  }

  objHor = <div className='rectHor'>{objArrayHor}</div>

  return(objHor);
}

function App() {
  return (
    <main className="app">
      <Header/>
      <Heroes/>
      <Card/>
      <Test/>
    </main>
  );
}

export default App;
