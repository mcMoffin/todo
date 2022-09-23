import React, {createContext, useState, useEffect} from 'react';

const RootContext = createContext({});

export function RootProvider({ children }) {
	const [list, setList] = useState([]);
	
	useEffect(() => { getTodos() }, []);
	
	function fetcher() {
		if (localStorage.getItem('todos') === null) {
			return [];
		} else {
			return JSON.parse(localStorage.getItem('todos'));
		}
	}

	const getTodos = async () => {
		let todos = fetcher();
		setList([...todos]);
	};

	function saveLocalTodos(todo) {
		let todos = fetcher();
	
		todos.push(todo);
		setList([...todos]);
		localStorage.setItem('todos', JSON.stringify(todos));
	};

	function deleteTodos(index) {
		let todos = fetcher();
		Array.isArray(index) ? todos = todos.filter((e, i) => !index.includes(i)) : todos = todos.filter((e, i) => i !== index);

		setList(todos);
		localStorage.setItem('todos', JSON.stringify(todos));
	};

	return <RootContext.Provider value={{ list, saveLocalTodos, deleteTodos}}>
		{children}
	</RootContext.Provider>;
}

export default RootContext;
