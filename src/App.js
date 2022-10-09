import logo from "./logo.svg";
import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
const todos=[
  {text:'Cortar cebolla', completed: false},
  {text:'Tomar el curso de intro a React', completed: false},
  {text:'Llorar con la llorona', completed: false},
  {text:'Cortar a la llorona', completed: false},
]

function App() {
	return (
		<>
    <TodoCounter/>
    <TodoSearch/>
			{/*
			<TodoSearch></TodoSearch>
			<TodoList>
				todos.map(todo=><TodoItem />)
			</TodoList>

			<CreateToDoButton></CreateToDoButton> */}
		</>
	);
}

export default App;
