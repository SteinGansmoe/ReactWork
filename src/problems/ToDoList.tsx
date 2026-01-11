import { useState } from "react";
import type { ChangeEvent } from "react";


type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

type TodoState = Todo[];

export function TodoList() {
    const [todos, setTodos] = useState<TodoState>([]);
    const [inputValue, setInputValue] = useState("");

    const isDisabled = inputValue.trim() === '';

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const addTodo = () => {
        if (inputValue.trim() !== '') {
            const newTodo: Todo = {
                id: Date.now(),
                text: inputValue.trim(),
                completed: false,
            };

            setTodos([...todos, newTodo]);
            setInputValue('');
        }  
    }

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }
    const removeTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };


    return (
        <div>
            <h1>To Do List</h1>
            <input 
            type="text"
            placeholder="Add new item to To-Do"
            onChange={handleInput}
            value={inputValue}
            />
            <button
            type="button"
            disabled={isDisabled}
            onClick={addTodo}
            >Add</button>
   

            <ul>
            {todos.map((todo) => (
                <li 
                key={todo.id}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}
                >
                    {todo.text}
                    <button onClick={() => toggleTodo(todo.id)} style={{ marginLeft: '10px' }}>
                        {todo.completed ? 'Undo' : 'Completed'}
                    </button>
                    <button onClick={() => removeTodo(todo.id)} style={{ marginLeft: '5px' }}>
                        Remove
                    </button>
                </li>
            ))}
            </ul>
        </div>
    )
}