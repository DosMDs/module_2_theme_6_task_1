import { useParams, useNavigate } from "react-router-dom";
import { useGetTask } from "../../hooks";
import styles from "./Task.module.css";
import { useState } from "react";
import { TaskCard, TaskEdit } from "../../components";
import { NotFound } from "../NotFound/NotFound";

export const Task = () => {
	const { id } = useParams();
	const [error, setError] = useState(null);
	const [isEditing, setIsEditing] = useState(false);
	const [refreshTaskFlag, setRefreshTaskFlag] = useState(false);

	const navigate = useNavigate();

	const { task, isLoading } = useGetTask(id, setError, refreshTaskFlag);

	const refreshTask = (result) => {
		setError(result.error);
		setRefreshTaskFlag(!refreshTaskFlag);
	};

	const backButton = () => (
		<>
			<button onClick={() => navigate(-1)} className={styles.backButton}>
				Назад
			</button>
		</>
	);

	if (isLoading) return <div className={styles.loader}>Загрузка...</div>;
	if (!task) return <NotFound>Задача не найдена</NotFound>;
	if (error) {
		return (
			<div className={styles.error}>
				{backButton()}
				<p>Произошла ошибка при загрузке задачи:</p>
				<pre>{error || "Неизвестная ошибка"}</pre>
			</div>
		);
	}

	const handleEdit = () => {
		setIsEditing(true);
	};

	return (
		<div className={styles.container}>
			{backButton()}

			<div className={styles.card}>
				{isEditing ? (
					<TaskEdit {...{ task, setIsEditing, refreshTask }} />
				) : (
					<TaskCard {...{ task, handleEdit, refreshTask }} />
				)}
			</div>
		</div>
	);
};
