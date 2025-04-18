import { Link } from "react-router-dom";
import { useUpdateTodo } from "../../hooks";
import styles from "./TodoItemDisplay.module.css";

export const TodoItemDisplay = ({ id, title, completed, refreshTodosList }) => {
	const { isUpdating, updateTodo } = useUpdateTodo(refreshTodosList);

	const handleCheckboxUpdate = (id) => {
		const body = { completed: !completed, title };
		updateTodo(id, body);
	};

	return (
		<>
			<input
				type="checkbox"
				checked={completed}
				className={styles.checkbox}
				disabled={isUpdating}
				onChange={() => handleCheckboxUpdate(id)}
			/>
			<Link to={`/todos/${id}`}>
				<span className={styles.title}>{title}</span>
			</Link>
		</>
	);
};
