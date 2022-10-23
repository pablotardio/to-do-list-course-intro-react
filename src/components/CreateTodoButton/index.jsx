import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import './CreateTodoButton.css'
export const CreateTodoButton = () => {
	const { handlers:{
		openCreateTodo,
		cancelCreateTodo
	} } = useContext(TodoContext);

	const handlers={
		clickButton:()=>{
			openCreateTodo()
		}
	}
	return <button onClick={handlers.clickButton} className="CreateTodoButton">+</button>;
};
