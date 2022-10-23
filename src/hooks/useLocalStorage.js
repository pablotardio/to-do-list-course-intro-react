import { useEffect, useState } from "react";

export const useLocalStorage = (itemName, initialValue) => {
	const [item, setItem] = useState(initialValue);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			try {
				let localStorageItem = localStorage.getItem(itemName);
				let parsedItem;
				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = [];
				} else {
					parsedItem = JSON.parse(localStorageItem);
				}
				setItem(parsedItem);
				setLoading(false);
			} catch (error) {
				setError(error);
			}
		}, 1000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	/**
	 * Saves todos in the state and local storage
	 * @param {*} newTodos
	 */
	const saveItem = (newTodos) => {
		try {
			setItem(newTodos);
			localStorage.setItem(itemName, JSON.stringify(newTodos));
		} catch (error) {
			setError(error)
		}
	};
	return { item, saveItem, loading, error };
};