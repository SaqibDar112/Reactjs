import './App.css'
import { useState } from 'react';

function App() {

  const [counter,setCounter] = useState(5);

  // const addValue=()=>{
  //   setCounter(counter=>counter+1);
  //   setCounter(counter=>counter+1);
  //   setCounter(counter=>counter+1);
  //   setCounter(counter=>counter+1);
  // }
  // const decValue=()=>{
  //   setCounter(counter - 1);
  // }


  const addValue=()=>{
    setCounter(counter=>{
      if(counter>=10){
        return counter= 10;
      }
      return counter+1;
    })
  }
  const decValue=()=>{
    setCounter(counter=>{
      if(counter<=0){
        return counter = 0;
      }
      return counter-1;
    })
  }
  return (
    <>
      <h1>Saqib Dar</h1>
      <h2>Counter value:  {counter}</h2>

      <button onClick={addValue}>Increase Value</button>
      <br/>
      <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App;