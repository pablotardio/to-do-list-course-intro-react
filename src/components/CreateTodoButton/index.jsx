import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./CreateTodoButton.css";
export const CreateTodoButton = () => {
	const {
		isModalOpen,
		handlers: { openCreateTodo, cancelCreateTodo },
	} = useContext(TodoContext);
	// If I sent the setState of modal, i could use the negation with prevstate i.e. setState(prevState=>!prevState)
	const handlers = {
		clickButton: () => {
			isModalOpen ? cancelCreateTodo() : openCreateTodo();
		},
	};
	return (
		<button onClick={handlers.clickButton} className="CreateTodoButton">
			+
		</button>
	);
};
