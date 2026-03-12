import React from "react";

function Todolist(){
    const[todos,settodos]=React.useState([])
    const[ntd,setntd]=React.useState("");
     function addTodo(){
        settodos([...todos,ntd]);
     }

    return(<div>
        <h1>Todo list</h1>
        <input type="text" onChange={(e)=>{setntd(e.target.value)}} />
        <button onClick={()=>{addTodo()}}>addtodo</button>

        <ul>
            {todos.map((todo)=>{
                return<li>{todo}</li>
            })}
        </ul>
    </div>)
}
export default Todolist;