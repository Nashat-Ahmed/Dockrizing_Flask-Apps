import React, { useState, useEffect } from 'react';

function App() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        fetch('/api/todos')
            .then((response) => response.json())
            .then((data) => setTodos(data));
    }, []);

    const addTodo = async () => {
        const response = await fetch('/api/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text }),
        });
        const newTodo = await response.json();
        setTodos([...todos, newTodo]);
        setText('');
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo._id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
