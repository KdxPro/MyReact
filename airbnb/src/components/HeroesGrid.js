import { Heros } from "./Heros";

export function HeroesGrid({maxHeight, maxWidth, maxDev}) {

  let objArrayVer = new Array(maxHeight);
  let objArrayVerKey = "";
  let objArrayHor = new Array(maxWidth);
  let objHor;

  let nrOfRectVer = 0;
  let randVal = 0;

  let i = 0, i2 = 0;
  for (i = 0; i < objArrayHor.length; i++) {
    
    if (i < maxHeight)
      nrOfRectVer = i + 1;
    else if (i > objArrayHor.length - maxHeight)
      nrOfRectVer = objArrayHor.length - i;

    objArrayVer = new Array(nrOfRectVer);

    randVal = Math.floor(Math.random() * maxDev - maxDev / 2);

    for (i2 = 0; i2 < nrOfRectVer; i2++)
    {
      objArrayVerKey = i.toString() + "_" + i2.toString();
      objArrayVer[i2] = <Heros key={objArrayVerKey} nr={objArrayVerKey}></Heros>;
    }

    objArrayHor[i] = <div className='rectVer' key={i} style={{ 'marginTop': randVal + 'px' }}>{objArrayVer}</div>;

  }

  objHor = <div className='rectHor'>{objArrayHor}</div>;

  return (objHor);
}
