
import React,{useEffect} from "react";
import Button from "@mui/material/Button";

function ButtonUsage(props) {
  return <Button variant="contained">{props.children}</Button>;
}

function Counter(){
  const [count, setCount] = React.useState(0);
  console[x,setx]=React.useState

  function inc() {
    setCount(count + 1);
  }
  function dec() {
    setCount(count - 1);
  }

   useEffect(() => {
    console.log("Chiranjeevi megastar");
  }, []);

  return(<div className="mybox">
    <h2>value of X:{x}</h2>
    <h1>Counter:{count}</h1>
     <button onClick={() => { inc();}}>
        Increment
     </button>
      <button onClick={() => {dec();}}>
        Decrement
      </button>
  </div>)
}
export default Counter;