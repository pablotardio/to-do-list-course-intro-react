import logo from "../../logo.svg";
import "./App.css";
import { TodoCounter } from "../TodoCounter/index";
import { TodoSearch } from "../TodoSearch/index";
import { TodoList } from "../TodoList/index";
import { TodoItem } from "../TodoItem/index";
import { CreateTodoButton } from "../CreateTodoButton/index";
import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoItemLoading } from "../loading/TodoItemLoading";
const defaultTodos = [
	{ text: "Cortar cebolla", completed: false },
	{ text: "Tomar el curso de intro a React", completed: false },
	{ text: "Llorar con la llorona", completed: false },
	{ text: "Cortar a la llorona", completed: false },
];

function AppUI() {
	const { handlers, todos, loading, error, isModalOpen } =
		useContext(TodoContext);
	return (
		<>
			<TodoCounter />
			<TodoSearch />
			<TodoList>
				{loading && new Array(2).fill(1).map((item=><TodoItemLoading/>))}
				{error && <p>Hubo un error </p>}
				{!loading && !todos.length && <p>crea tu primerTodo </p>}
				{todos.map((todo) => (
					<TodoItem
						{...todo}
						onComplete={handlers.completeTodo}
						onDelete={handlers.deleteTodo}
					/>
				))}
			</TodoList>{" "}
			{isModalOpen && (
				<Modal>
					<TodoForm />
				</Modal>
			)}
			<CreateTodoButton />
		</>
	);
}

export default AppUI;
