import React from "react";
import './TodoItem.css'
export const TodoItem = ({ completed ,text}) => {
	const handlers={
		check:()=>{
			alert(`se completo la tarea ${text}`)
		},
		delete:()=>{
			alert(`se borrara la tarea ${text}`)

		}
	}
	return (
		(
			<li className="TodoItem">
			  <span onClick={handlers.check} className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>
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
