import React, { createContext, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const TodoContext = createContext();
const localStorageVariables = {
	TODOS_V1: "todos_v1",
};
const initialTodos = [
	{ text: "Cortar cebolla", completed: false },
	{ text: "Tomar el curso de intro a React", completed: false },
	{ text: "Llorar con la llorona", completed: false },
	{ text: "Cortar a la llorona", completed: false },
];

export const TodoContextProvider = ({ children }) => {
	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error,
	} = useLocalStorage(localStorageVariables.TODOS_V1, []);
	const [searchValue, setSearchValue] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handlers = {
		search: (val) => {
			setSearchValue(val);
			saveTodos(
				initialTodos.filter((todo) =>
					todo.text.toLowerCase().includes(val.toLowerCase())
				)
			);
		},
		openCreateTodo:()=>{
			setIsModalOpen(true)
		},
		
		cancelCreateTodo:()=>{
			setIsModalOpen(false)
		},
		completeTodo: (text) => {
			console.log(text);
			const indexToComplete = todos.findIndex((todo) =>
				todo.text.includes(text)
			);
			const newTodos = [...todos];
			newTodos[indexToComplete].completed = true;
			saveTodos(newTodos);
		},
		deleteTodo: (text) => {
			saveTodos(todos.filter((todo) => todo.text !== text));
		},
	};
	return (
		<TodoContext.Provider
			value={{
				searchValue,
				handlers,
				todos,
				loading,
				error,
                completedTodos:todos.filter((todo)=>(todo.completed)).length,
                totalTodos:todos.length,
				isModalOpen
				
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};
