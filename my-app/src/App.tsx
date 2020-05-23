import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import './App.css';
import { Person, IPerson } from './Components/person';

function App() {

  const [personState, setPersonState] : [IPerson, Dispatch<SetStateAction<IPerson>>] = useState({} as IPerson)

  useEffect(() => {
    (async () => {
      const person : IPerson = await fetch("/api/HttpTrigger").then(res => res.json());
      setPersonState(person);
    })();
  }, [])

  return (
    <div className="App">
      {
        personState !== null && 
          <Person name={personState.name} yearsBornAgo={personState.yearsBornAgo}/>
      }
    </div>
  );
}

export default App;
