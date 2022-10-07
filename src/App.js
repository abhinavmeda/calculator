import { useState } from 'react';

const Button = ({ value, currentDisplayData, setDisplay }) => {
  const handler = () => setDisplay(currentDisplayData + value);
  
  const submitHandler = () => {

    alert('Equals has been pressed')
    setDisplay('')
  
  }
  
  return (
    <>
    {
      value === '='
      ?<button onClick={submitHandler}>{value}</button>
      :<button onClick={handler}>{value}</button>
    }
    </>
  )
}

const Grid = () => {
  const [calcData, setCalcData] = useState('');
  return (
    <>
    <div>{calcData}</div>
    <div>
      <Button setDisplay={setCalcData}value={7} currentDisplayData={calcData}/>
      <Button setDisplay={setCalcData}value={8} currentDisplayData={calcData}/>
      <Button setDisplay={setCalcData}value={9}currentDisplayData={calcData}/>
    </div>
    <div>
      <Button setDisplay={setCalcData} value={4} currentDisplayData={calcData}/>
      <Button setDisplay={setCalcData} value={5} currentDisplayData={calcData}/>
      <Button setDisplay={setCalcData} value={6} currentDisplayData={calcData}/>
    </div>
     <div>
       <Button setDisplay={setCalcData} value={1} currentDisplayData={calcData}/>
       <Button setDisplay={setCalcData} value={2} currentDisplayData={calcData}/>
       <Button setDisplay={setCalcData} value={3} currentDisplayData={calcData}/>
     </div>
     <div>
      <Button setDisplay={setCalcData} value={0} currentDisplayData={calcData}/>
      <Button setDisplay={setCalcData} value={'.'} currentDisplayData={calcData}/>
      <Button setDisplay={setCalcData} value={'='} currentDisplayData={calcData}/>
     </div>
     
    </>
  )
}

function App() {
  return (
    <>
    <h1>Hello world</h1>
    <Grid/>
    </>
    
  );
}

export default App;
