import  { useState, useEffect } from 'react';



export function useFleet(){
  const [fleet, setFleet] = useState([]);
  const load = () => {
    fetch('http://127.0.0.1:8000/api/fleet')
      .then(res => res.json())
      .then(data => setFleet(data.data))
  }
  useEffect(load, [])
  return fleet
}