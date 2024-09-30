import { useState } from 'react'

function TimeConverter() {
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
      <label htmlFor="numbers">분</label>
      <input type="number" id="numbers" step="10" min="0" value={invert ? numbers * 60 : numbers} onChange={handler} disabled={invert}/>
      
      <label htmlFor="hour"> 시간</label>
      <input type="number" id="hour" placeholder="시간" value={invert ? numbers : parseInt(numbers/60)} onChange={handler} disabled={!invert}/>
      
      <button onClick={resetNumbers}>Reset</button>

      <button onClick={inverted}>{invert ? "시간을 분으로" : "분을 시간으로"}</button>
    </>
  );
}

export default TimeConverter