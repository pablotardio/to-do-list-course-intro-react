import { useEffect, useState } from "react";
import { TodoContextProvider } from "../../context/TodoContext";
import AppUI from "./AppUI";


function App() {
	return (
		<TodoContextProvider>
			<AppUI
			/>
		</TodoContextProvider>
	);
}

export default App;
