import React from "react";
import './CreateTodoButton.css'
export const CreateTodoButton = () => {
	const handlers={
		clickButton:()=>{
			alert('esto deberia mostrar un modal')
		}
	}
	return <button onClick={handlers.clickButton} className="button-circled">+</button>;
};
