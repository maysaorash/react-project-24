import React, { useState } from 'react';

function App() {
  
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

useEffect(() => {
document.getElementById('input').focus()
document.title = 'Todo List'
})

  const handleInput = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      title: title
    }
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    setTitle('');
  }


  return (
    <div style={{marginLeft: 30}}>
      <h1>Todo Hooks</h1>
      <form onSubmit={handleSubmit}>
        <input id="input" type="text" onChange={handleInput} value={title}/>
      </form>
      <ul>
        {todos.map(todo => <li>{todo.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
