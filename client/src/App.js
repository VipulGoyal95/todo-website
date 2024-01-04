import Todo from "./components/Todo";
import "./App.css";
import React, { useEffect, useState } from "react";
import New from "./components/New";
const API_BASE = "http://localhost:3001/list";


function App() {
  const [todos,setTodos]=useState([]);

  useEffect(()=>{
    const getdata = () =>{
        fetch(API_BASE)
        .then((res) => res.json())
        .then((data) => {
            setTodos(data);
          })
        .catch((err) => {
            console.log(err);
          });
    }

    
    getdata();
    
    console.log(todos);
    // eslint-disable-next-line 
  },[]);
    

  return (
    <div className="box">
      <h1 className="h1-text">Welcome! Vipul</h1>
      <h2 className="h2-text">What's Today!</h2>
      <div className="main-box">
        {todos.map(todo => <Todo 
          item={todo} key ={todo._id} todofnc={setTodos} />)
        }
      </div>

      <New setTodos={setTodos}/>
      
    </div>
  );
}

export default App;
