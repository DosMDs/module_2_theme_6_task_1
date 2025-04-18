import { useEffect, useState } from "react";
import { fetchData } from "../utils";

export const useGetTodo = (id, setError) => {
	const [todo, setTodo] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetchData({
			id,
		})
			.then((result) => {
				setTodo(result.data);
				setError(result.error);
			})
			.finally(setIsLoading(false));
	}, [setError, id]);

	return { todo, isLoading };
};
