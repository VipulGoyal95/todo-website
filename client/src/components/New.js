import React, { useState } from "react";
import "./New.css";
const New = (props) => {
  const [show, setShow] = useState(false);
  const [newdata,setNewdata] = useState("");
  const handleAdd = async() => {
    const data = await fetch("http://localhost:3001/list/new",{
        headers:{
            "Content-Type":"application/json"
        },
        method:"POST",
        body:JSON.stringify({
            task:newdata
        })
    })

    const body = await data.json();

    console.log(body);
    props.setTodos((todo)=> [...todo,body]);
    setShow(false);
    setNewdata("");
  };

  return (
    <div>
      <div className="New-container" onClick={()=>setShow(true)}>
        +
      </div>
      {show && 
        <div className="popmenu">
            <div className="closepopup" onClick={()=>setShow(false)}>X</div>
            <h1 className="text">Add Task</h1>
            <input type="text" className="inputtextbox" onChange={(e)=>setNewdata(e.target.value)}></input><br></br>
            <input type ="button" className="create-task" value="Create Task" onClick={handleAdd}></input>
        </div>}
    </div>
  );
};

export default New;
