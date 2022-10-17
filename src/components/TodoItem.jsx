import React from "react";
import './TodoItem.css'
export const TodoItem = ({ completed ,text, onComplete}) => {
	const handlers={
		complete:()=>{
			onComplete(text)
		},
		delete:()=>{
			alert(`se borrara la tarea ${text}`)

		}
	}
	return (
		(
			<li className="TodoItem">
			  <span onClick={handlers.complete} className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>
				√
			  </span>
			  <p  className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
				{text}
			  </p>
			  <span onClick={handlers.delete} className="Icon Icon-delete">
				X
			  </span>
			</li>
		  )
	);
};
