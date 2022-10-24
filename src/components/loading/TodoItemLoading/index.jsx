import React from "react";
import { CompleteIcon } from "../../icons/CompleteIcon";
import { DeleteIcon } from "../../icons/DeleteIcon";
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
			  <CompleteIcon onComplete={handlers.complete} color={completed?'green':'gray'}/>
			  <p  className={`TodoItemLoading-p ${completed && 'TodoItemLoading-p--complete'}`}>
				Cargando...
			  </p>
			  <DeleteIcon onDelete={handlers.delete}/>
			</li>
		  )
	);
};
