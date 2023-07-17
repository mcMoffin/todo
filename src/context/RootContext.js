import React, {createContext, useState, useEffect} from 'react';

const RootContext = createContext({});

export function RootProvider({ children }) {
	const [list, setList] = useState([]);

	useEffect(() => {getTodos();}, []);
	
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
		Array.isArray(index) ? index.map(num => list.pop(e=> e[num])) : list.pop(e=> e[index])

		setList(list);
		localStorage.setItem('todos', JSON.stringify(list));
	};

	function updater(todo) {
		
	}
	return <RootContext.Provider value={{ list, saveLocalTodos, deleteTodos}}>
		{children}
	</RootContext.Provider>;
}

export default RootContext;
