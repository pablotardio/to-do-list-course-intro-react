import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./TodoForm.css";
export const TodoForm = () => {
	const {
		handlers: { openCreateTodo, cancelCreateTodo ,addTodo},
	} = useContext(TodoContext);

    const [text, setText] = useState('')
	const handlers = {
		submit: (e) => {
            e.preventDefault()
			addTodo(text)
		},
		cancel: () => {
			cancelCreateTodo();
		},
	};
	return (
		<form onSubmit={handlers.submit}>
			<label htmlFor="">Escribe tu nuevo TODO</label>
			<textarea value={text} onChange={(e)=>{setText(e.target.value)}} name="" id="" ></textarea>
			<div className="TodoTodoForm-buttonContainer">
				<button
					className="TodoForm-button TodoForm-button-cancel"
					type="button"
					onClick={handlers.cancel}
				>
					cancelar
				</button>
				<button
					className="TodoForm-button TodoForm-button-add"
					type="submit"
				>
					guardar
				</button>
			</div>
		</form>
	);
};
