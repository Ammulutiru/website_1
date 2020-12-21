import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import Header from './components/layout/header'

function App() {
  const initialTodo= [
    {
      id: 1,
      title: 'Take out the trash',
      completed: true
    },

    {
      id: 2,
      title: 'dinner with wife',
      completed: false
    },

    {
      id: 3,
      title: 'Meetng with boss',
      completed: false
    }
  ];
    
 const markComplete = (id) => {
    setTodo(todo.map(t => { 
      if(t.id === id) {
        t.completed = !t.completed
      }
      return t;
      
    } ))
  } 
const delTodo =(id) => {
  setTodo( [...todo.filter(t => t.id !== id)]);
}
  const [todo, setTodo] = useState(initialTodo);
  // const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Header />
     <Todo key={todo.id} todo={todo} markComplete={(id)=> {markComplete(id)}} delTodo={(id)=>{delTodo(id)} } />
     {/* <p>Count: {count}</p>
     <button onClick={()=>{setCount(count+1)}}>Increase</button>
     <button onClick={()=>{setCount(count-1)}}>Decrease</button> */}
    </div>
  );
    }

export default App;
