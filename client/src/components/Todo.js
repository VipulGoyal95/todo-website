import React from 'react';
import Complete from './Complete';
import Delete from './Delete';
import "./Todo.css";


const Todo = (props)=>{

    const handleClick= async ()=>{
        const data = await fetch("http://localhost:3001/list/complete/"+props.item._id,{
            headers:{
                "Content-Type":"application/json"
            }
        })
        const body = await data.json();
        // eslint-disable-next-line 
        props.todofnc(todos=> todos.map(todo=>{
             if(todo._id === body._id){
                todo.completed = body.completed;
             }
             return todo;
            }));
    }
    return (
        <div className='list-container'>
            <Complete iscomplete={props.item.completed} userId={props.item._id} setTodos={props.todofnc} />
            <h1 className={"textbox"+(props.item.completed ? " is-complete":"")} onClick={handleClick}>{props.item.task}</h1>
            <Delete isdeleted={props.item._id} setTodos={props.todofnc} />
        </div>
    )
}


export default Todo;

