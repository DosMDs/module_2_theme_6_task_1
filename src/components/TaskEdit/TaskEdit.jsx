import { useState } from "react";
import { useUpdateTodo } from "../../hooks";
import styles from "./TaskEdit.module.css";

export const TaskEdit = ({ task, setIsEditing, refreshTask }) => {
	const [editedTitle, setEditedTitle] = useState(task.title);

	const { updateTodo } = useUpdateTodo(refreshTask);

	const handleSave = () => {
		if (editedTitle.trim()) {
			updateTodo(task.id, { ...task, title: editedTitle });
			setIsEditing(false);
		}
	};

	const handleCancel = () => {
		setIsEditing(false);
		setEditedTitle("");
	};

	return (
		<div className={styles.editBlock}>
			<input
				value={editedTitle}
				onChange={(e) => setEditedTitle(e.target.value)}
				className={styles.input}
			/>
			<div className={styles.editActions}>
				<button className={styles.saveButton} onClick={handleSave}>
					Сохранить
				</button>
				<button className={styles.cancelButton} onClick={handleCancel}>
					Отмена
				</button>
			</div>
		</div>
	);
};
