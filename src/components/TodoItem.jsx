import React from "react";
import './TodoItem.css'
export const TodoItem = ({ completed ,text}) => {
	return (
		(
			<li className="TodoItem">
			  <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>
				√
			  </span>
			  <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
				{text}
			  </p>
			  <span className="Icon Icon-delete">
				X
			  </span>
			</li>
		  )
	);
};
