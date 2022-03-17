import './App.css'
import { useFleet } from './hooks/useFleet';
import { useState } from 'react'
import { Ship } from './components/Ship';

function App() {
  
  const fleet = useFleet();
  const [paired, setPaired] = useState(false);
  return (
    <div className="App">
      {fleet.map(ship =>  <Ship type={ship.type} 
      paired={paired}
      positions={{
        initial: ship.initialPosition,
        current: ship.points
      }}/>)}
      <button className={"run"} onClick={()=>setPaired(!paired)}>run</button>
    </div>
  )
}

export default App
