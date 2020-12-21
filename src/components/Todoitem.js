import React from 'react';

function Todoitem(props) {
    function getStyle() {
      return{ 
          baclground: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted',
          textDecoration: props.todo.completed ?
          'line-through' : 'none' 
      }
    }

    const btnStyle = {
        background: '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 9px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'

    }
    const id=props.todo.id;
    return (
        <div style={getStyle()}>
            <p>
                <input type="checkbox" onChange={()=>{props.markComplete(id)} } /> {' '}
                {props.todo.title}
                <button onClick={()=>{props.delTodo(id)}} style={btnStyle}>x</button>
                </p>
            
        </div>

      
    )
}


export default Todoitem ;
