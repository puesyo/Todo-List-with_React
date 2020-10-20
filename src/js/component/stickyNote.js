import React, { useState } from "react";
import PropTypes from "prop-types";

export function StickyNote(props) {
	//const [value, setValue] = useState("");

	return (
		<div className=" container text-center mt-5">
			<ul>
				<li>
					<a href="#">
						<h4>To do # {props.index + 1}</h4>
						{console.log("******" + props.todoContent.value)}
						<p>{props.todoContent.value}</p>
					</a>
				</li>
			</ul>
			<button onClick={() => props.deleteTodos(props.todoContent)}>
				<i className="fas fa-trash" />
			</button>
		</div>
	);
}

StickyNote.propTypes = {
	index: PropTypes.number,
	todoContent: PropTypes.string,
	deleteTodos: PropTypes.func
};

//onClick={console.log("hello culo")}
