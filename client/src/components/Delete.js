import React from 'react';
import "./Delete.css";
const Delete = (props) =>{
    const handleDelete = async ()=>{
        const data = await fetch("http://localhost:3001/list/delete/"+props.isdeleted,{method: 'DELETE'});
        const body = await data.json();
        props.setTodos((todos)=>todos.filter(todo=> todo._id !== body._id));


    };
    return (
        <div className='Delete-container' onClick={handleDelete}>X
        </div>
    )
}

export default Delete;