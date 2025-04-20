import { useEffect, useState } from "react";
import { fetchData } from "../utils";

export const useGetTask = (id, setError, refreshTaskFlag) => {
	const [task, setTask] = useState(null);
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
	}, [setError, id, refreshTaskFlag]);

	return { task, isLoading };
};
