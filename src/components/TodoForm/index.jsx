import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

export const TodoForm = () => {
	const {
		handlers: { openCreateTodo, cancelCreateTodo },
	} = useContext(TodoContext);
	const handlers = {
		submit: (e) => {
			e.preventDefault();
		},
		cancel: () => {
			cancelCreateTodo();
		},
	};
	return (
		<form onSubmit={handlers.submit}>
			<label htmlFor="">...</label>
			<textarea name="" id="" cols="30" rows="10"></textarea>
			<button type="button" onClick={handlers.cancel}>
				{" "}
				cancelar
			</button>{" "}
			<button type="submit">guardar</button>
		</form>
	);
};
