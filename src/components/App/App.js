import { useState } from "react";
import AppUI from "./AppUI";
const initialTodos = [
	{ text: "Cortar cebolla", completed: false },
	{ text: "Tomar el curso de intro a React", completed: false },
	{ text: "Llorar con la llorona", completed: false },
	{ text: "Cortar a la llorona", completed: false },
];

const localStorageVariables = {
	TODOS_V1: "todos_v1",
};
function App() {
	let localStorageTodos = localStorage.getItem(localStorageVariables.TODOS_V1);
	let defaultTodos;
	if (!localStorageTodos) {
		localStorage.setItem(localStorageVariables.TODOS_V1, JSON.stringify([]));
		defaultTodos = [];
	} else {
		defaultTodos = JSON.parse(localStorageTodos);
	}

	const [searchValue, setSearchValue] = useState("");
	const [todos, setTodos] = useState(defaultTodos);
	const handlers = {
		search: (val) => {
			setSearchValue(val);
			setTodos(
				defaultTodos.filter((todo) =>
					todo.text.toLowerCase().includes(val.toLowerCase())
				)
			);
		},
		completeTodo: (text) => {
			console.log(text);
			const indexToComplete = todos.findIndex((todo) =>
				todo.text.includes(text)
			);
			const newTodos = [...todos];
			newTodos[indexToComplete].completed = true;
			setTodos(newTodos);
		},
		deleteTodo: (text) => {
			setTodos(todos.filter((todo) => todo.text !== text));
		},
	};
	return (
		<>
			<AppUI searchValue={searchValue} handlers={handlers} todos={todos} />
		</>
	);
}

export default App;
