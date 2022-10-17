import logo from "./logo.svg";
import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { useState } from "react";
const todos = [
	{ text: "Cortar cebolla", completed: false },
	{ text: "Tomar el curso de intro a React", completed: false },
	{ text: "Llorar con la llorona", completed: false },
	{ text: "Cortar a la llorona", completed: false },
];

function App() {
	const [searchValue, setSearchValue] = useState('')
	return (
		<>
			<TodoCounter />
			<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
			<TodoList>
				{todos.map((todo) => (
					<TodoItem {...todo} />
				))}
			</TodoList>
			<CreateTodoButton/>
		</>
	);
}

export default App;
