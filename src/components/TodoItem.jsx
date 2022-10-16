import React from "react";
import './TodoItem.css'
export const TodoItem = ({ children }) => {
	return (
		<li className="todo-item">
			<span>
				<input className="radio-item-styled " type="checkbox" /> <p>{children}</p> 
			</span>
		</li>
	);
};
