import { useNavigate } from "react-router-dom";
import { useDeleteTodo, useUpdateTodo } from "../../hooks";
import styles from "./TaskCard.module.css";

export const TaskCard = ({ task, handleEdit, refreshTask }) => {
	const navigate = useNavigate();

	const { deleteTodo, isDeleting } = useDeleteTodo(() => navigate("/"));
	const { updateTodo, isUpdating } = useUpdateTodo(refreshTask);

	const handleToggle = () => {
		updateTodo(task.id, { ...task, completed: !task.completed });
	};

	const handleDelete = () => {
		deleteTodo(task.id);
	};

	return (
		<>
			<h1 className={styles.title}>{task.title}</h1>

			<div className={styles.actions}>
				<label className={styles.checkboxLabel}>
					<input
						type="checkbox"
						checked={task.completed}
						onChange={handleToggle}
					/>
					Завершено
				</label>
				<div className={styles.actionButtons}>
					<button
						className={styles.editButton}
						onClick={handleEdit}
						disabled={isUpdating}
					>
						Редактировать
					</button>
					<button
						className={styles.deleteButton}
						onClick={handleDelete}
						disabled={isDeleting}
					>
						Удалить
					</button>
				</div>
			</div>
		</>
	);
};
