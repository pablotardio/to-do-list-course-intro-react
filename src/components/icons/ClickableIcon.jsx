import React from "react";
import "./ClickableIcon.css";
import { BsFillTrashFill, BsFillCheckCircleFill } from "react-icons/bs";

const iconTypes = {
	check: (color) => <BsFillCheckCircleFill color={color} />,
	delete: (color) => <BsFillTrashFill color={color} />,
};
export const ClickableIcon = ({  color, onClick,type }) => {
	return (
		<span className="Icon" onClick={onClick}>
			{iconTypes[type](color)}
		</span>
	);
};
