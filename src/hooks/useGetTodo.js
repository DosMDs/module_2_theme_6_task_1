import { useEffect, useState } from "react";
import { fetchData } from "../utils";

export const useGetTask = (id, setError) => {
	const [task, setTask] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetchData({
			id,
		})
			.then((result) => {
				setTask(result.data);
				setError(result.error);
			})
			.finally(setIsLoading(false));
	}, [setError, id]);

	return { task, isLoading };
};
