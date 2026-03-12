import React from "react";

function Counter(){
    const [count, setCount]=React.useState(0)

     return(
        <div>
            <h1>counter:{count}</h1>
            <button>increment</button>
            <button>decrement</button>
        </div>
     );

}
export default Counter;