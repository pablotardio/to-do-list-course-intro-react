import React from "react";
import './TodoItemLoading.css'
export const TodoItemLoading = ({ completed ,text, onComplete,onDelete}) => {
	const handlers={
		complete:()=>{
			onComplete(text)
		},
		delete:()=>{
			onDelete(text)

		}
	}
	return (
		(
			<li className="TodoItemLoading">
			  <span onClick={handlers.complete} className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>
				√
			  </span>
			  <p  className={`TodoItemLoading-p ${completed && 'TodoItemLoading-p--complete'}`}>
				Cargando...
			  </p>
			  <span onClick={handlers.delete} className="Icon Icon-delete">
				X
			  </span>
			</li>
		  )
	);
};
