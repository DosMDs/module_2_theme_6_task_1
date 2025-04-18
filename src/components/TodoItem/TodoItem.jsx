import styles from "./TodoItem.module.css";
import { useState } from "react";
import { TodoItemDisplay } from "../TodoItemDisplay/TodoItemDisplay";

export const TodoItem = (props) => {
	const [isEdit, setIsEdit] = useState(false);
	const componentProps = { ...props, isEdit, setIsEdit };

	return (
		<li
			className={`${styles.todoItem} ${
				props.completed && !isEdit ? styles.completed : ""
			}`}
		>
			<TodoItemDisplay {...componentProps} />
		</li>
	);
};
