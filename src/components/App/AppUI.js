import logo from "../../logo.svg";
import "./App.css";
import { TodoCounter } from "../TodoCounter/index";
import { TodoSearch } from "../TodoSearch/index";
import { TodoList } from "../TodoList/index";
import { TodoItem } from "../TodoItem/index";
import { CreateTodoButton } from "../CreateTodoButton/index";
import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
const defaultTodos = [
	{ text: "Cortar cebolla", completed: false },
	{ text: "Tomar el curso de intro a React", completed: false },
	{ text: "Llorar con la llorona", completed: false },
	{ text: "Cortar a la llorona", completed: false },
];

function AppUI() {
	const { searchValue, handlers, todos, loading, error } =
		useContext(TodoContext);
	return (
		<>
			<TodoCounter />
			<TodoSearch />

		
					<TodoList>
						{loading && <p>Estamos cargando... </p>}
						{error && <p>Hubo un error </p>}
						{!loading && !todos.lenght && <p>crea tu primerTodo </p>}
						{todos.map((todo) => (
							<TodoItem
								{...todo}
								onComplete={handlers.completeTodo}
								onDelete={handlers.deleteTodo}
							/>
						))}
					</TodoList>
			<CreateTodoButton />
		</>
	);
}

export default AppUI;
