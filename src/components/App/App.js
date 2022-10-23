import { useEffect, useState } from "react";
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

const useLocalStorage = (itemName, initialValue) => {
	const [item, setItem] = useState(initialValue);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			try {
				let localStorageItem = localStorage.getItem(itemName);
				let parsedItem;
				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = [];
				} else {
					parsedItem = JSON.parse(localStorageItem);
				}
				setItem(parsedItem);
				setLoading(false);
			} catch (error) {
				setError(error);
			}
		}, 1000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	/**
	 * Saves todos in the state and local storage
	 * @param {*} newTodos
	 */
	const saveItem = (newTodos) => {
		try {
			setItem(newTodos);
			localStorage.setItem(itemName, JSON.stringify(newTodos));
		} catch (error) {
			setError(error)
		}
	};
	return { item, saveItem, loading, error };
};
function App() {
	const {item:todos,saveItem:saveTodos,loading,error} = useLocalStorage(
		localStorageVariables.TODOS_V1,
		[]
	);
	const [searchValue, setSearchValue] = useState("");
	const handlers = {
		search: (val) => {
			setSearchValue(val);
			saveTodos(
				initialTodos.filter((todo) =>
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
			saveTodos(newTodos);
		},
		deleteTodo: (text) => {
			saveTodos(todos.filter((todo) => todo.text !== text));
		},
	};
	return (
		<>
			<AppUI searchValue={searchValue} handlers={handlers} todos={todos} loading={ loading} error={error} />
		</>
	);
}

export default App;
