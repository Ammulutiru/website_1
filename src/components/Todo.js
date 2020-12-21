import Todoitem from './Todoitem';
import React from 'react';

function Todo(props) { 

  return props.todo.map((todo) => (
      <React.Fragment>
    <Todoitem key={todo.id} todo={todo} markComplete={(id)=> {props.markComplete(id)}} delTodo={(id)=>{props.delTodo(id)}} /> 
  
  {/* <h3 key={todo.id}>{ todo.title }</h3> */}
  </React.Fragment>

  ));
}


export default Todo;
