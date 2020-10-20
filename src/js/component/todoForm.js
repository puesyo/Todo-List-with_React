import React, { useState } from "react";
import PropTypes from "prop-types";

export function TodoForm(props) {
	//this variable holds the value entered on the input text
	const [text, setText] = useState("");

	//functions
	let handleSubmit = e => {
		if (!text) {
			alert("form cannot be empty");
			return;
		}
		e.preventDefault();
		props.addTodos(text);
		setText("");
	};

	return (
		<div className=" container">
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<input
						className="input"
						type="text"
						placeholder="Add to list here!"
						value={text}
						onChange={e => setText(e.target.value)}
					/>
				</div>
			</form>
		</div>
	);
}

TodoForm.propTypes = {
	addTodos: PropTypes.func
};
