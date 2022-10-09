import React from "react";

export const TodoList = ({ children }) => {
	return (
		<>
			<section>
				<ul>{children}</ul>
			</section>
		</>
	);
};
