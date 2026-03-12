import React from "react";


function Counter(){
  const[c,setc]=React.useState()
  function inc(){
    setc(c+1)
  }
  return(<div>
    <h1>Counter:{c}</h1>
    <button onClick={()=>{inc()}}>increment</button>
  </div>)
}
export default Counter