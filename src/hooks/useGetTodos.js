import { useEffect, useState } from "react";
import { fetchData } from "../utils";

export const useGetTodos = (
	titleToSearch,
	refreshTodosFlag,
	setError,
	sortOrder
) => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetchData({
			search: { title_like: titleToSearch },
			order: sortOrder,
		})
			.then((result) => {
				setTodos(result.data);
				setError(result.error);
			})
			.finally(setIsLoading(false));
	}, [refreshTodosFlag, titleToSearch, setError, sortOrder]);

	return { todos, isLoading };
};
