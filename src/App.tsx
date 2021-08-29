import React from 'react';
import AddRemove from './components/AddRemove';
import Counter from './components/Counter';
import {useState} from 'react'

function App() {

  const [val, setVal] = useState(0);

  const add = () =>{
    setVal(val+1);
  }

  const remove = () =>{
    if(val > 0){
      setVal(val-1);
    }
  }

  return (
    <div>
      <Counter value={val}/>
      <AddRemove add={add} remove={remove} disableRemove={val === 0} />
    </div>
  );

  

}



export default App;
