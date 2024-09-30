import { useState } from 'react'

function LengthConverter() {
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
      <label htmlFor="numbers">cm</label>
      <input type="number" id="numbers" min="0" step="10" value={invert ? Math.floor(numbers * 2.54 * 100) / 100 : numbers} onChange={handler} disabled={invert}/>
      
      <label htmlFor="inch"> inch</label>
      <input type="number" id="inch" min="0" value={invert ? numbers : Math.round(numbers / 2.54 * 100) / 100} onChange={handler} disabled={!invert}/>
      
      <button onClick={resetNumbers}>Reset</button>

      <button onClick={inverted}>{invert ? "inch to cm" : "cm to inch"}</button>
    </>
  );
}

export default LengthConverter