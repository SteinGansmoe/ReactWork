import { useState, useEffect } from "react";  
import type { ChangeEvent } from "react";

{/*
Excersise #3 - Debounced Search 
Build a component that filters a list based on a search input, 
but only updates the “applied search” after the user stops typing for a short time (debounce).
   
*/}


type User = {
  id: number;
  username: string;
};

const USERS: User[] = [
  { id: 1, username: "anna" },
  { id: 2, username: "anne" },
  { id: 3, username: "john" },
  { id: 4, username: "marcus" },
  { id: 5, username: "marianne" },
  { id: 6, username: "steinar" },
  { id: 7, username: "stone" },
];




export function DebouncedSearch() {
    const [inputValue, setInputValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState('');

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
            setInputValue(event.target.value);
        }

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedValue(inputValue)
        }, 400);

        return () => {
            clearTimeout(timerId);
        }
    }, [inputValue]);

    const trimmed = debouncedValue.trim().toLowerCase();
    const filteredUsers = USERS.filter((user) => user.username.toLowerCase().includes(trimmed))
    

    return (
        <div>
            <h1>Debounced Search</h1>
            <input 
            type="text"
            value={inputValue}
            onChange={handleInput}
            />
            <p>Searching for {debouncedValue}</p>
            <ul>
            {
            filteredUsers.length 
            ? 
            (filteredUsers.map((user) => (
                
                <li
                key={user.id}
                >
                {user.username}
                </li>
                )))
                : ("No Results.")
            }
            </ul>
        </div>
    )
}

