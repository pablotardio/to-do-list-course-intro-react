import React from "react";
import './TodoItem.css'
import {BsFillTrashFill} from 'react-icons'
import { DeleteIcon } from "../icons/DeleteIcon";
import { CompleteIcon } from "../icons/CompleteIcon";
export const TodoItem = ({ completed ,text, onComplete,onDelete}) => {
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
			<li className="TodoItem">
				<CompleteIcon onComplete={handlers.complete} color={completed?'green':'gray'}/>
			  <p  className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
				{text}
			  </p>
			  <DeleteIcon onDelete={handlers.delete}/>
			  
			</li>
		  )
	);
};
