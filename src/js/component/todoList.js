import React, { useState } from "react";
import { TodoForm } from "./todoForm.js";
import { StickyNote } from "./stickyNote";

export function TodoList() {
	const [todos, setTodos] = useState([]);
	//console.log(todos);

	//add a todo
	const AddTodos = value => {
		const newList = [...todos, { value }];
		setTodos(newList);
	};
	console.log(todos);
	//delete a todo
	const deleteTodos = value => {
		const filterTodoList = todos.filter(
			currentValue => currentValue !== value
		);
		setTodos(filterTodoList);
	};

	return (
		<div className=" container col ">
			<TodoForm addTodos={AddTodos} />
			{todos.map((value, index) => (
				<StickyNote
					key={index}
					todoContent={value}
					index={index}
					deleteTodos={deleteTodos}
				/>
			))}
		</div>
	);
}
