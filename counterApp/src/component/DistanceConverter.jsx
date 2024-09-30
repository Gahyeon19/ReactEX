import { useState } from 'react'

function DistanceConverter() {
  let [numbers, setNumbers] = useState(0);
  let [invert, setInvert] = useState(false);

  let handler = (event) => {
    setNumbers(event.target.value);
  }

  let resetNumbers = () => {
    setNumbers(0);
  }

  let inverted = () => {
    setInvert(cur => !cur);
    setNumbers(0);
  }

  return (
    <>
      <label htmlFor="numbers">km</label>
      <input type="number" id="numbers" min="0" value={invert ? Math.floor(numbers * 1.609 * 100) / 100 : numbers} onChange={handler} disabled={invert}/>
      
      <label htmlFor="miles"> miles</label>
      <input type="number" id="miles" min="0" value={invert ? numbers : Math.round(numbers / 1.609 * 100) / 100} onChange={handler} disabled={!invert}/>
      
      <button onClick={resetNumbers}>Reset</button>

      <button onClick={inverted}>{invert ? "mile to km" : "km to mile"}</button>
    </>
  );
}

export default DistanceConverter