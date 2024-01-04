import React from 'react';
import "./Complete.css";

const  Complete = (props) =>{


    const handleComplete= async ()=>{
        const data = await fetch("http://localhost:3001/list/complete/"+props.userId,{
            headers:{
                "Content-Type":"application/json"
            }
        })
        const body = await data.json();
        

        // eslint-disable-next-line 
        props.setTodos(todos=> todos.map(todo=>{
            if(todo._id === body._id){
               todo.completed = body.completed;
            }
            return todo;
        }));
    }

    return (
        <div className={"Complete-container"+ (props.iscomplete ? " is-complete":"")} onClick={handleComplete}>
        </div>
    )
}

export default Complete;