import logo from "./logo.svg";
import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { useState } from "react";
const defaultTodos = [
	{ text: "Cortar cebolla", completed: false },
	{ text: "Tomar el curso de intro a React", completed: false },
	{ text: "Llorar con la llorona", completed: false },
	{ text: "Cortar a la llorona", completed: false },
];

function App() {
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
		completeTodo:(text)=>{
			console.log(text);
			const indexToComplete=todos.findIndex(todo=>(todo.text.includes(text)))
			const newTodos=[...todos]
			newTodos[indexToComplete].completed=true
			setTodos(newTodos)
		},
	};
	return (
		<>
			<TodoCounter />
			<TodoSearch
				searchValue={searchValue}
				setSearchValue={handlers.search}
			/>
			<TodoList>
				{todos.map((todo) => (
					<TodoItem {...todo} onComplete={handlers.completeTodo} />
				))}
			</TodoList>
			<CreateTodoButton />
		</>
	);
}

export default App;
