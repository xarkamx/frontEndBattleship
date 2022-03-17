
export function Ship({type,positions,paired=false}){
  console.log(positions)
  const position= !paired ?  positions.initial: positions.current
  return <div
    className={`ship`}
    style={{
    position: 'absolute',
    top: `${position[1]}%`,
    left: `${position[0]}%`,
    backgroundColor: type==='battleship'? '#f8aba0': '#f8d6a0',
  }}></div>
}