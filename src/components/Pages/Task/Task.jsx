import { useParams } from "react-router-dom";
import { useGetTask } from "../../../hooks";
import { useState } from "react";

export const Task = () => {
	const { id } = useParams();
	const [error, setError] = useState(null);
	const [todo, isLoading] = useGetTask(id, setError);

	console.log(todo);

	if (error) {
		return <h1>{error}</h1>;
	}

	return (
		<>
			<h1>Задача</h1>
		</>
	);
};
