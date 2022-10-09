import React from "react";

export const TodoItem = ({ children }) => {
	return (
		<li>
			<span>
				C <p>{children}</p> X
			</span>
		</li>
	);
};
