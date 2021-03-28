import React, { useState, useRef } from 'react';
import { TodoList } from './TodoList';
import { v4 as uuidv4 } from 'uuid';

export const TodoContainer = () => {

    const [todos, setTodos] = useState([])
    const todoNameRef = useRef();

    function handleAddTodo(e) {
        const name = todoNameRef.current.value
        if (name === '') return;
        setTodos( prevTodos => {
            return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
        })
        todoNameRef.current.value = null
    }

    function toggleTodo(id) {
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete =! todo.complete;
        setTodos(newTodos)
    }

    return (
        <>  
            <h3>My Todo List</h3>
            <TodoList toggleTodo={toggleTodo} todos={todos} />
            <label htmlFor="input_todo" style={{marginRight: 5}}>I have to</label>
            <input ref={todoNameRef} type='text' id='input_todo'></input>
            <button onClick={handleAddTodo} style={{marginLeft: 5}}>Add</button>
            <button style={{marginLeft: 5}}>Clear Completed</button>
        </>
    );
}