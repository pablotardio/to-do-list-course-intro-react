import React from "react";
import './TodoList.css'

export const TodoList = ({ children }) => {
	return (
		<>
			<section>
				<ul>{children}</ul>
			</section>
		</>
	);
};
