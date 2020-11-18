
import React, { useState, useEffect } from 'react';

/* function getStateFromLocalStorage(){
  var storage = localStorage.getItem('counterState');
  console.log('Storage', storage);

  if(!storage){
    return 0;
  }

  if(typeof storage == 'string'){
    return JSON.parse(storage);
  }
} */

function setStateInLocalStorage(value){
  localStorage.setItem("counterState", value);
}

const useLocalStorage = (initialState, key) => {
  const get = () => {
    const storage = localStorage.getItem(key);
   
    if(storage) return JSON.parse(storage)["value"];
    return initialState;
  }

  const [value, setValue] = useState(get());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({value}));
  },[value]);

  return [value, setValue];
}

const Counter = () => { 
  const [count, setCount] = useLocalStorage(0, 'storage');

  const increment = () => setCount(() =>{
    if(count >= 5) return 5;
   return count + 1
  });

  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  
  useEffect(() => { document.title = count }, [count]);
  useEffect(() => { setStateInLocalStorage(count) }, [count]);

  return (
    <div className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );

}

export default Counter;
